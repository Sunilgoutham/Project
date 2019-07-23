import {
  GET_CHOCOLATE,
  GET_CHOCOLATE_SUCCESS,
  GET_CHOCOLATE_FAILURE,
  GET_CHOCOLATE_DESCRIPTION,
  GET_CHOCOLATE_DESCRIPTION_SUCCESS,
  GET_CHOCOLATE_DESCRIPTION_FAILURE
} from "../Types/chocolateTypes";

export function getChocolates() {
  return { type: GET_CHOCOLATE };
}
export function getChocolatesSuccess(chocolates) {
  return { type: GET_CHOCOLATE_SUCCESS, chocolates };
}
export function getChocolatesFailure(error) {
  return { type: GET_CHOCOLATE_FAILURE, error };
}
export function getChocolatesDesc(id) {
  return { type: GET_CHOCOLATE_DESCRIPTION, id };
}
export function getChocolatesDescSuccess(chocolatesDec) {
  return { type: GET_CHOCOLATE_DESCRIPTION_SUCCESS, chocolatesDec };
}
export function getChocolatesDescFailure(error) {
  return { type: GET_CHOCOLATE_DESCRIPTION_FAILURE, error };
}
