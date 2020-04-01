import React from 'react';
import './Login.css';
import logo from '../logo.svg';

import { post } from '../core/http-request';
import { urlFromObject } from '../core/query-params';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: ''
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(event) {
    const res = await post('http://localhost:4000/auth/login', this.state);

    if (res.ok) {
      this._redirectToAuth();
    }
  }

  handleInputChange(propName, event) {
    this.setState({[propName]: event.target.value});
  }

  _redirectToAuth() {
    window.location.href = 'http://localhost:4000/auth' + window.location.search;
  }

  render() {
    return (
      <div className="Login">
        <div className="Login-form">
          <div className="form-row">
            <label htmlFor="login">Login: </label>
            <input id="login" type="text" placeholder="Login" onChange={this.handleInputChange.bind(this, 'login')}/>
          </div>

          <div className="form-row">
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" placeholder="Password" onChange={this.handleInputChange.bind(this, 'password')}/>
          </div>

          <div className="form-row">
            <button onClick={this.handleLogin}>Login</button>
          </div>
        </div>

        <header className="Login-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default Login;
