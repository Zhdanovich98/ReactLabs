import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import './index.css';
import { Link } from 'react-router-dom'


class View extends Component {
    state = {
        characters: []
    };



    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;


        return (
            <div className="container">
                 <Link to="/" >Login</Link>
                            <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New Employee</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }

}

export default View;