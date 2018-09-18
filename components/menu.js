import React from "react";

class menu extends React.Component {
  render() {
    return (
      <ul id="menu">
        <li className="menuactive">
          <a href="#">Project</a>
        </li>
        <li>
          <a href="#">Team Performance</a>
        </li>
        <li>
          <a href="#">Calendar</a>
        </li>
      </ul>
    );
  }
}

export default menu;
