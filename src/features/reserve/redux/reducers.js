import {initialState} from './initialState';
import {ADD_RESERVE} from './actionTypes';

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_RESERVE:
      return {
        ...state,
        data: [...state.data, action.data],
      };

    default:
      return state;
  }
};
