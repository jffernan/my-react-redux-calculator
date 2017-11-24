import React, { Component } from 'react';
import './App.css';
import Buttons from './Buttons';
import OutputForm from './OutputForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My React Redux Calculator</h1>
        </header>
        <p className="App-intro">
          <OutputForm/>
          <Buttons/>
        </p>
      </div>
    );
  }
}

export default App;
