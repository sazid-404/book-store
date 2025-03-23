import { CHANGE_STATUS, CHANGE_SEARCH } from "./actionTypes";
import initialState from "./initialState";

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return { ...state, status: action.payload };
    case CHANGE_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
};

export default filtersReducer;
