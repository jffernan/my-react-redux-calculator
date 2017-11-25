let initialState = {
  output: '0',
  operator: null,
  previousValue: 0
};

export const operators = {
  ADD: "ADD",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
  SUBTRACT: "SUBTRACT"
};

export function calculate( output, previousValue, operator ) {
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
}

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case 'ENTER_NUMBER':
    return {
        ...state
      , output: state.output === "0" ? action.number.toString() : `${ state.output }${ action.number }`
    };

    case 'SET_OPERATOR':
      return {
          output: "0"
        , operator: action.operator
        , previousValue: state.operator ? calculate( parseFloat( state.output ), state.previousValue, state.operator ) : parseFloat( state.output )
      };

    case 'PERCENTAGE':
      return {
          ...state
        , output: ( parseFloat( state.output ) / 100 ).toString()
      };

    case 'CLEAR':
      return {
          output: "0"
        , operator: null
        , previousValue: 0
      };

    case 'EVALUATE':
      return {
          output: calculate( parseFloat( state.output ), state.previousValue, state.operator ).toString()
        , operator: null
        , previousValue: 0
      };

    case 'TOGGLE_NEGATIVE':
      return {
          ...state
        , output: ( -parseFloat( state.output ) ).toString()
      };

    default:
      return state;
  }
}
