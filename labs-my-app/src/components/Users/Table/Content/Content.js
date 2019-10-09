import React, { Component } from "react";
import s from './Content.module.css'
const Content = props => {
  const lines= props.userData.map((line, index) => {
    return (
      <tr key={index}>
        <td>{line.firstname}</td>
        <td>{line.lastname}</td>
        <td>{line.email}</td>
        <td>
         <button onClick={() => props.removeUser(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody>{lines}</tbody>;
};
export default Content;
