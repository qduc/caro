import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './Board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board size="3"/>
      </div>
    );
  }
}

export default App;
