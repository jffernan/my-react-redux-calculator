import {
	CLEAR,
	ENTER_NUMBER,
	EQUALS,
	PERCENTAGE,
	SET_OPERATOR,
	TOGGLE_NEGATIVE
} from './constants.js';

export const clear = () => {
	return {
    type: CLEAR
  };
}

export const enterNumber = number => {
	return {
    type: ENTER_NUMBER,
		number
  };
}

export const equals = () => {
	return {
    type: EQUALS
  };
}

export const percentage = () => {
	return {
    type: PERCENTAGE
  };
}

export const setOperator = operator => {
	return {
    type: SET_OPERATOR,
		operator
  };
}

export const toggleNegative = () => {
	return {
    type: TOGGLE_NEGATIVE
  };
}
