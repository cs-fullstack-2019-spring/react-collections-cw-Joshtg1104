import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserCollection from './UserCollection';

class App extends Component {
  render() {
      const rawUserData = require('./rawData');
    return (
      <div className="App">
          <UserCollection userData={rawUserData}/>
      </div>
    );
  }
}

export default App;
