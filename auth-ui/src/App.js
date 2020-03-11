import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-form">
        <div className="form-row">
          <label htmlFor="login">Login: </label>
          <input id="login" type="text" placeholder="Login"/>
        </div>

        <div className="form-row">
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" placeholder="Password"/>
        </div>
        <div className="form-row">
          <button>Login</button>
        </div>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
