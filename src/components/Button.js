import React from 'react';

const Button = ({callback, value}) => {
  return (
    <div className="button">
      <button
        onClick={ callback }>
        {value}
      </button>
    </div>
  )
};

export default Button;
