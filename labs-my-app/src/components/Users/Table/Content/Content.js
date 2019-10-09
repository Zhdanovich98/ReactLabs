import React, { Component } from "react";
import s from './Content.module.css'
const Content = props => {
  const rows = props.characterData.map((row, index) => {
    return (
      
        <tr key={index}>
          <td>{row.firstname}</td>
          <td>{row.lastname}</td>
          <td>{row.email}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      
    );
  });

  return <tbody>{rows}</tbody>;
};
export default Content;
