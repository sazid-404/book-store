import { CHANGE_STATUS, CHANGE_SEARCH } from "./actionTypes";

export const changeStatus = (status) => ({
  type: CHANGE_STATUS,
  payload: status,
});

export const changeSearch = (text) => ({
  type: CHANGE_SEARCH,
  payload: text,
});
