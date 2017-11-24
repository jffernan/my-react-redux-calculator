import React, { Component } from 'react';
import Button from './Button';

class Buttons extends Component {
  handleClick = (name) => {
    this.props.clickHandler(name);
  }

  render() {
    return (
      <div className = "buttons" >
        <div className = "row" >
          <Button name="A/C" clickHandler={this.handleClick} />
          <Button name="+/-" clickHandler={this.handleClick} />
          <Button name="%" clickHandler={this.handleClick} />
          <Button name="/" clickHandler={this.handleClick} />
        </div>
        <div className = "row" >
          <Button name="7" clickHandler={this.handleClick} />
          <Button name="8" clickHandler={this.handleClick} />
          <Button name="9" clickHandler={this.handleClick} />
          <Button name="x" clickHandler={this.handleClick} />
        </div>
        <div className = "row" >
          <Button name="4" clickHandler={this.handleClick} />
          <Button name="5" clickHandler={this.handleClick} />
          <Button name="6" clickHandler={this.handleClick} />
          <Button name="-" clickHandler={this.handleClick} />
        </div>
        <div className = "row" >
          <Button name="1" clickHandler={this.handleClick} />
          <Button name="2" clickHandler={this.handleClick} />
          <Button name="3" clickHandler={this.handleClick} />
          <Button name="+" clickHandler={this.handleClick} />
        </div>
        <div className = "row" >
          <Button name="0" clickHandler={this.handleClick} />
          <Button name="." clickHandler={this.handleClick} />
          <Button name="=" clickHandler={this.handleClick} />
          <Button name="ENTER" clickHandler={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Buttons;
