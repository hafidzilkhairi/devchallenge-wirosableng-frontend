import React from "react";
import title from "./title";
import tableData from "./table_data";

class firstContent extends React.Component {
  render() {
    return (
      <div className="konten kontenPertama">
        <title />
        <tableData />
      </div>
    );
  }
}

export default firstContent;
