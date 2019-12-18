import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import View from './View';
import './index.css';
import { Switch, Route } from 'react-router-dom';
import store from "./redux/store/store.js";
import {Provider} from 'react-redux';


const App = () => (
 
      <Provider store={store}>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/view' component={View}/>
      </Switch>
      </Provider>
  )

ReactDOM.render((<BrowserRouter> <App /> </BrowserRouter> ), document.getElementById('root'))
//ReactDOM.render(<Login />, document.getElementById('root'));