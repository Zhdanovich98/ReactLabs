import React, { Component } from "react";
import s from './TextForm.module.css';
class TextForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      firstname: "",
      lastname: "",
      email: ""
    };

    this.state = this.initialState;
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { firstname, lastname, email } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <div className={s.form}>
          
            <div classname={s.block}>
              <div className={s.item}>
                <label>Firstname</label>
                <input
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={this.handleChange}
                />
              </div>
              <div className={s.item}>
                <label>Lastname</label>
                <input
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={this.handleChange}
                />
              </div>
              <div className={s.item}>
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              
            </div>
          </div>
          <button type="submit">Add User</button>
        </div>
      </form>
    );
  }
}

export default TextForm;
