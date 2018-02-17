
import * as React from "react";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";

export interface ITemplateWrapperProps {
  children: () => React.ReactNode;
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const TemplateWrapper: React.SFC<ITemplateWrapperProps> = ({ children, data }) => (
  <header>

    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <title>{data.site.siteMetadata.title}</title>

      <link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css" />
    </Helmet>

    <Header title={data.site.siteMetadata.title}/>

    <main className="w-70 center sans-serif">
      {children()}
    </main>

    <Footer />

  </header>
);

export default TemplateWrapper;

export const query = graphql`
  query Layout {

    site {
      id
      siteMetadata {
        title
      }
    }

  }
`;
