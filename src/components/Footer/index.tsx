
import * as React from "react";

export const Footer: React.SFC = () => (
  <footer className="bg-dark-gray pv4 ph3 ph5-m ph6-l light-gray">
    <small className="f6 db tc">© 2018 <b className="ttu">YOU Inc</b>., All Rights Reserved</small>
    <div className="tc mt3">
      <a title="Language" className="f6 dib ph2 link light-gray dim">Language</a>
      <a title="Terms"    className="f6 dib ph2 link light-gray dim">Terms of Use</a>
      <a title="Privacy"  className="f6 dib ph2 link light-gray dim">Privacy</a>
    </div>
  </footer>
);

export default Footer;
