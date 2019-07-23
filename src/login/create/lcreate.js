import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_SEARCH,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE
} from "../types/ltypes";

export function getUsers() {
  return { type: GET_USER };
}
export function getUsersSuccess(users) {
  return { type: GET_USER_SUCCESS, users };
}
export function getUsersFailure(error) {
  return { type: GET_USER_FAILURE, error };
}

export function getSearch(text) {
  return { type: GET_SEARCH, text };
}

export function getSearchSuccess(searchData) {
  return { type: GET_SEARCH_SUCCESS, searchData };
}

export function getSearchFailure(error) {
  return { type: GET_SEARCH_FAILURE, error };
}
