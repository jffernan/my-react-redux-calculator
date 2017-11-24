import React from 'react';

const Buttons = () => {
  return (
    <div className = "buttons" >
      <div className = "row1" >
        <button className = "clear">A/C
        </button>
        <button className = "percent">%
        </button>
        <button className = "plusMinus">+/-
        </button>
        <button className = "divide">/
        </button>
      </div>
      <div className = "row2" >
        <button className = "seven">7
        </button>
        <button className = "eight">8
        </button>
        <button className = "nine">9
        </button>
        <button className = "multiply">x
        </button>
      </div>
      <div className = "row3" >
        <button className = "four">4
        </button>
        <button className = "five">5
        </button>
        <button className = "six">6
        </button>
        <button className = "subtract">-
        </button>
      </div>
      <div className = "row4" >
        <button className = "one">1
        </button>
        <button className = "two">2
        </button>
        <button className = "three">3
        </button>
        <button className = "plus">+
        </button>
      </div>
      <div className = "row5" >
        <button className = "zero">0
        </button>
        <button className = "decimal">.
        </button>
        <button className = "equals">=
        </button>
        <button className = "enter">ENTER
        </button>
      </div>
    </div>
  )
};

export default Buttons;
