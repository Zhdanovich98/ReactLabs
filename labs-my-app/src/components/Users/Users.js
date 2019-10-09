import React, { Component } from 'react';
import Header from './Table/Header/Header';
import Content from './Table/Content/Content';
import s from "./Users.module.css";





class Users extends Component {
    render() {
        const { characterData, removeUser } = this.props;

        return (
          <div className={s.table}>
            <table>
              <Header />
              <Content characterData={characterData} removeUser={removeUser} />
            </table>
          </div>
        );
    }
}

export default Users;