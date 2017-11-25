export function clear() {
	return {
    type: CLEAR
  };
}

export function enterNumber( number ) {
	return {
    number: number,
    type: ENTER_NUMBER
  };
}

export function evaluate() {
	return {
    type: EVALUATE
  };
}

export function percentage() {
	return {
    type: PERCENTAGE
  };
}

export function setOperator( operator ) {
	return {
    operator: operator,
    type: SET_OPERATOR
  };
}

export function toggleNegative() {
	return {
    type: TOGGLE_NEGATIVE
  };
}
