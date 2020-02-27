import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table>
      <tr>
        <th>FullName</th>
        <th>Job</th>
      </tr>
      <tr>
        <td>{props.name}</td>
        <td>{props.occupation}</td>
      </tr>
      
    </table>

  );
}

export default Table;