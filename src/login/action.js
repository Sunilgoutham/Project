import { getUsersSuccess, getUsersFailure } from "../create/lcreate";
import { put } from "redux-saga/effects";

export function* getData(props) {
  try {
    const Response = yield fetch(`http://localhost:4000/users`);

    const users = yield Response.json();
    console.log("users1" + users);
    yield put(getUsersSuccess(users));
  } catch (err) {
    yield put(getUsersFailure(err));
  }
}
