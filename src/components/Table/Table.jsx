import React from "react";
import "./Table.css"
import Line from "../Line/Line";

const Table = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Organization</th>
          <th>Attacks</th>
          <th>Status</th>
          <th>Summary</th>
        </tr>
        <Line/>
      </table>
    </div>
  );
};

export default Table;
