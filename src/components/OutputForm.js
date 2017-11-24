import React from 'react';
//import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';

const OutputForm = (props) =>
  <div className="outputForm">
    <form>
      <input
        type="number"
        name="value"
        value={props.value}
        id="value"
      />
    </form>
  </div>

export default OutputForm;
//onSubmit={props.total}
//onChange={props.handleChange}
