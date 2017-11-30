import {operators} from './constants.js';
import {
	CLEAR,
	ENTER_NUMBER,
	EQUALS,
	PERCENTAGE,
	SET_OPERATOR,
	TOGGLE_NEGATIVE
} from './constants.js';

const initialState = {
  output: '0',
  operator: null,
  previousValue: 0,
	total: null
};

export const calculate = ( output, previousValue, operator ) => {
  switch ( operator ) {
    case operators.ADD:
      return previousValue + output;
    case operators.DIVIDE:
      return previousValue / output;
    case operators.MULTIPLY:
      return previousValue * output;
    case operators.SUBTRACT:
      return previousValue - output;
    default:
      return output;
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ENTER_NUMBER:
    return {
      ...state,
			total: state.operator && state.output !=="0"?
			  `${ state.output }${ action.number }`:
				 null,
      output: state.output === "0" ?
				action.number.toString():
				`${ state.output }${ action.number }`
    };

    case SET_OPERATOR:
      return {
        output: "0",
				total: `${ state.output }`,
        operator: action.operator,
        previousValue: state.operator ?
					calculate( parseFloat( state.output ), state.previousValue, state.operator ):
					parseFloat( state.output )
      };

    case PERCENTAGE:
      return {
        ...state,
        output: parseFloat( parseFloat( state.output ) / 100 ).toString()
      };

    case CLEAR:
      return {
        output: "0",
        operator: null,
        previousValue: 0,
				total: null
      };

    case EQUALS:
      return {
				output: "0",
        total: calculate( parseFloat( state.output ), state.previousValue, state.operator ).toString(),
        operator: null,
        previousValue: 0
      };

    case TOGGLE_NEGATIVE:
      return {
        ...state,
        output: ( -parseFloat( state.output ) ).toString()
      };

    default:
      return state;
  }
};

export default mainReducer;
