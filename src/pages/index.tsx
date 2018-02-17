
import * as React from "react";

export interface IIndexProps {
  data: {
    allUsersJson: {
      edges: [
        {
          node: {
            id: string,
            name: string,
            age: number,
            picture: string,
            friends: [ { name: string } ];
          };
        }
      ];
    };
  };
}

export const Index: React.SFC<IIndexProps> = ({ data }) => (
  <div className="user-list mv4 flex flex-wrap justify-around">

      {
        data.allUsersJson.edges.map(({ node }) => {
          return (
            <div className="user-list__user-card w-40 mv3 flex">

              <img className="user-list__user-picture br-100" src={node.picture} alt=""/>

              <div>

                <div className="f5 ml4">
                  {node.name} ({node.age})
                </div>

                <div className="user-list__friends-list f6 ml3">
                  <span>Friends: </span>
                  {
                    node.friends.reduce((acc, { name }, index) => {
                      const isLastElem = node.friends.length === (index + 1);
                      return `${acc} ${name}${!isLastElem && ","}`;
                    }, "")
                  }
                </div>

              </div>
            </div>
          );
        })
      }

  </div>
);

export default Index;

export const query = graphql`
query Index {

  allUsersJson(sort: {fields: [name], order: ASC}) {
    edges {
      node {
        id
        name
        age
        picture
        friends {
          name
        }
      }
    }
  }

}
`;
