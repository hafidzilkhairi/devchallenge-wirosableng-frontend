import React from "react";

class tableData extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>No.</th>
            <th>Nama Project</th>
            <th>Unit</th>
            <th>Stakeholder</th>
            <th>Sprint</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Teman Berbagi</td>
            <td>TNT</td>
            <td>TNT</td>
            <td>15</td>
            <td>
              Complete{" "}
              <span className="simbolStatus">
                <img src="asset/ButtonAndColor/triangle-up.svg" alt />
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Teman Berbagi</td>
            <td>TNT</td>
            <td>TNT</td>
            <td>15</td>
            <td>
              Complete{" "}
              <span className="simbolStatus">
                <img src="asset/ButtonAndColor/triangle-up.svg" alt />
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Teman Berbagi</td>
            <td>TNT</td>
            <td>TNT</td>
            <td>15</td>
            <td>
              Complete{" "}
              <span className="simbolStatus">
                <img src="asset/ButtonAndColor/triangle-up.svg" alt />
              </span>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>Teman Berbagi</td>
            <td>TNT</td>
            <td>TNT</td>
            <td>15</td>
            <td>
              Complete{" "}
              <span className="simbolStatus">
                <img src="asset/ButtonAndColor/triangle-up.svg" alt />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default tableData;
