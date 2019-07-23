import { takeLatest } from "redux-saga/effects";

import { GET_USER, GET_SEARCH } from "../../login/types/ltypes";
import searchSaga, {
  getFetch,
  getDataChok,
  getChockInfo,
  getBrandList,
  getBrandDe
} from "./lsaga";
import {
  GET_CHOCOLATE,
  GET_CHOCOLATE_DESCRIPTION
} from "../../Chocolate/Types/chocolateTypes";
import { GET_BRAND, GET_BRAND_DESCRIPTION } from "../../Brands/Types/Btypes";

export default function* watcher() {
  yield takeLatest(GET_USER, getFetch);
  yield takeLatest(GET_CHOCOLATE, getDataChok);
  yield takeLatest(GET_CHOCOLATE_DESCRIPTION, getChockInfo);
  yield takeLatest(GET_BRAND, getBrandList);
  yield takeLatest(GET_BRAND_DESCRIPTION, getBrandDe);
  yield takeLatest(GET_SEARCH, searchSaga);
}
