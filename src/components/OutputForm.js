import React from 'react';
//import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

const OutputForm = (props) =>
  <div className="outputForm">
    <form>
      <input
        type="number"
        name="output"
        value={props.output}
        id="output"
      />
    </form>
  </div>

export default OutputForm;
//onSubmit={props.output}
//onChange={props.handleChange}
