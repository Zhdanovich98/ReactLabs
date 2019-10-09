import React, { Component } from "react";
import TextForm from "../TextForm/TextForm";
import Users from "../Users/Users";

import s from "./App.module.css";

class App extends Component {
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
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div className={s.container}>
        <div className={s.block}>
          <TextForm handleSubmit={this.handleSubmit} />
        </div>
        <div className={s.block}>
          <Users
            characterData={characters}
            removeCharacter={this.removeCharacter}
          />
        </div>
      </div>
    );
  }
}

export default App;
