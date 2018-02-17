
import * as React from "react";
import Link from "gatsby-link";

export interface IHeaderProps {
  title: string;
}

export const Header: React.SFC<IHeaderProps> =
  ({ title }): React.ReactElement<IHeaderProps> => (
    <header className="bg-dark-blue mb4">

      <div className="w-70 center ma0 pv4">

        <h1 className="f1 ma0 pl6 white serif">
          {title}
        </h1>

      </div>

    </header>
  );

export default Header;
