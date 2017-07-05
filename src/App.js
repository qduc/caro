import React, { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

import Board from './Board';

class App extends Component {
  constructor() {
    super();
    this.state = {
      winner: null
    }
    this.endGameHandler = this.endGameHandler.bind(this);
  }

  endGameHandler(winner) {
    this.setState({
        winner
    });
  }

  render() {
    let message = this.state.winner === null ? null : (<div>Player {this.state.winner} win!</div>);
    return (
      <div className="App">
          {message}
          <div><Board size="8" handleEndGame={this.endGameHandler}/></div>
      </div>
    );
  }
}

export default App;
