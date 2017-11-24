import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import OutputForm from './components/OutputForm';
import OutputDisplay from './components/OutputDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      output: 0
    };
  }

  handleClick = (name) => {
    this.setState( { output: name } );
  }

  handleChange = (event) => {
    this.setState({
      output: event.target.value
    });
  }

  handleSubmit = (output) => {
    this.setState( { output: output } );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to My React Redux Calculator</h1>
        </header>
        <p className="App-intro">
          <OutputDisplay
            output={this.state.output}
          />
          <OutputForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            output={this.state.output}
          />
          <Buttons
            clickHandler = {this.handleClick}
          />
        </p>
      </div>
    );
  }
}

export default App;
