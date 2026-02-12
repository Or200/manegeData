import React from "react";
import terrorist from "../data.json";
const Line = () => {

  return Object.values(terrorist).map((element) => {
    return (
      <tr>
        <td>
          <img src={element.imageUrl} alt="terrorist" />
        </td>
        <td>{element.name}</td>
        <td>{element.organization}</td>
        <td>attacks {element.attacksCount}</td>
        <td>{element.status}</td>
        <td>{element.relationToIsraelSummary}</td>
      </tr>
    );
  });
};

export default Line;
