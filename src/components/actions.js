export const clear = () => {
	return {
    type: "CLEAR"
  };
}

export const enterNumber = ( number ) => {
	return {
    number: number,
    type: "ENTER_NUMBER"
  };
}

export const evaluate = () => {
	return {
    type: "EVALUATE"
  };
}

export const percentage = () => {
	return {
    type: "PERCENTAGE"
  };
}

export const setOperator = ( operator ) => {
	return {
    operator: operator,
    type: "SET_OPERATOR"
  };
}

export const toggleNegative = () => {
	return {
    type: "TOGGLE_NEGATIVE"
  };
}
