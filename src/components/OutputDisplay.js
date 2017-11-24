import React from 'react';
//import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
const OutputDisplay = (props) =>
  <div className="outputDisplay">
    {props.output}
  </div>

OutputDisplay.defaultProps = {
  output: '0'
};

export default OutputDisplay;
