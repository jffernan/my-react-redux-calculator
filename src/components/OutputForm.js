import React from 'react';
//import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

const OutputForm = (props) =>
  <div className="outputForm">
    <form onSubmit={props.handleSubmit}>
      <input
        type="number"
        name="output"
        value={props.output}
        id="output"
        onChange={props.handleChange}
        placeholder='0'
      />
    </form>
  </div>

export default OutputForm;
