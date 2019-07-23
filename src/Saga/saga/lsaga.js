import {
  getUsersSuccess,
  getUsersFailure,
  getSearchSuccess,
  getSearchFailure
} from "../../login/create/lcreate";
import { put } from "redux-saga/effects";
import {
  getChocolatesSuccess,
  getChocolatesFailure,
  getChocolatesDescSuccess
} from "../../Chocolate/Create/chocolatecreate";
import {
  getBrandsSuccess,
  getBrandsFailure,
  getBrandDescSuccess,
  getBrandDescFailure
} from "../../Brands/Create/Bcreate";
export function* getFetch() {
  try {
    const Response = yield fetch(`http://localhost:4000/users`);

    const users = yield Response.json();
    console.log("users1" + users);
    yield put(getUsersSuccess(users));
  } catch (err) {
    yield put(getUsersFailure(err));
  }
}
export function* getDataChok() {
  try {
    const Response = yield fetch(`http://localhost:4000/chocolates`);
    console.log(Response);
    const chocolates = yield Response.json();
    yield put(getChocolatesSuccess(chocolates));
  } catch (err) {
    yield put(getChocolatesFailure(err));
  }
}

export function* getChockInfo(action) {
  console.log("action" + action);
  try {
    const Response = yield fetch(
      `http://localhost:4000/chocolates/${action.id}`
    );
    console.log(Response);
    const choco = yield Response.json();
    console.log("choco" + choco);
    yield put(getChocolatesDescSuccess(choco));
  } catch (err) {
    yield put(getChocolatesFailure(err));
  }
}

export function* getBrandList() {
  try {
    const Response = yield fetch(`http://localhost:4000/brands`);
    console.log(Response);
    const brands = yield Response.json();
    yield put(getBrandsSuccess(brands));
  } catch (err) {
    yield put(getBrandsFailure(err));
  }
}

export function* getBrandDe(action) {
  console.log("action" + action);
  try {
    const Response = yield fetch(`http://localhost:4000/brands/${action.id}`);
    console.log(Response);
    const brandsDes = yield Response.json();
    console.log("brandsDes" + brandsDes);
    yield put(getBrandDescSuccess(brandsDes));
  } catch (err) {
    yield put(getBrandDescFailure(err));
  }
}
export default function* searchSaga({ text }) {
  try {
    let chocolateResponse = yield fetch(`http://localhost:4000/chocolates`);
    let chocolates = yield chocolateResponse.json();

    let searchData = chocolates.filter(choco => {
      return choco.name.toLowerCase().includes(text);
    });
    yield put(getSearchSuccess(searchData));
  } catch (error) {
    yield put(getSearchFailure(error));
  }
}
