import React, { Component } from "react";
import Router from './index';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
//import { browserHistory }  from 'react-router';
import { Link } from 'react-router-dom'
import './index.css';
import View from './View';


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add = (e)=>{
    e.preventDefault();
  window.location.assign('./view');
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
    

  handleSubmit(event) {
  //browserHistory.push(`/${view}`);
  }

  render() {
    return (
      <class loginForm>
        
         {/* <p4><Link to="/view" >View</Link></p4> */}
        <p1 class="header">Login</p1>
        <form onSubmit={this.handleSubmit}>
       
          <input class="inputs"
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input class="inputs"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
      
          <button onClick={this.add}  type="submit" class="Btn">Login</button>
        </form>
      </class>
    );
  }
}