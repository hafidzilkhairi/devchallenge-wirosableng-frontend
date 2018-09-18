import React from "react";
import logo from "./logo";
import menu from "./menu";

class sideNav extends React.Component {
  render() {
    return (
      <div id="side-nav" className="float">
        <logo />
        <menu />
      </div>
    );
  }
}

export default sideNav;
