import React, { Component } from 'react';
import Header from './Table/Header/Header';
import Content from './Table/Content/Content';





class Users extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                
                <Header />
                <Content characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Users;