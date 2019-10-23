import React, { Component } from "react";
import { login } from "../../respository";
import s from "./login.module.css";

class Login extends Component {
  constructor() {
    super();
    this.state = { name: "", password: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  submitLogin(event) {
    event.preventDefault();
    login(this.state)
      .then(token => (window.location = "/"))
      .catch(err => alert(err));
  }

  render() {
    return (
      <div>
        <hr />
        <div>
          <div>
            <div>
              <h3>Log in </h3>
            </div>
            <div>
              <form onSubmit={this.submitLogin}>
                <div>
                  <label>Name:</label>
                  <input
                    type="text"
                    name="name"
                    onChange={this.handleInputChange}
                  />
                </div>
                <div>
                  <label>Password:</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleInputChange}
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
