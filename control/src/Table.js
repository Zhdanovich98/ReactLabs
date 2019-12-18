import React, { Component } from 'react';
import './index.css';

const TableHeader = () => { 
    return (
        <thead>

            <tr>
                <th class="labels">Firstname</th>
                <th class="labels">Lastname</th>
                <th class="labels">Email</th>
                <th class="labels">Remove</th>
            </tr>

        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.firstname}</td>
                <td>{row.lastname}</td>
                <td>{row.mail}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;