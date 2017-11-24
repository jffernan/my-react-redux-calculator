import React from 'react';

const Button = (props) => {
  return (
    <div className="button">
      <button
        onClick={props.clickHandler.bind(this, props.name)}>
        {props.name}
      </button>
    </div>
  )
};

export default Button;
