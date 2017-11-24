import React from 'react';
//import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

const OutputForm = (props) =>
  <div className="outputDisplay">
    <form
      //onSubmit={props.total}
      type="number"
      name="value"
      value={props.value}
      //onChange={props.handleChange}
      id="value">
    </form>
  </div>

export default OutputForm;
