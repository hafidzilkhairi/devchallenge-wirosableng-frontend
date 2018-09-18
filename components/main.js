import React from "react";
import firstContent from "./first_content";
import secondContent from "./second_content";

class main extends React.Component {
  render() {
    return (
      <div id="main">
        <firstContent />
        <secondContent />
      </div>
    );
  }
}

export default main;
