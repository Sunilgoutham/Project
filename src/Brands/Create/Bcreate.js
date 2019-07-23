import {
  GET_BRAND,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAILURE,
  GET_BRAND_DESCRIPTION,
  GET_BRAND_DESCRIPTION_SUCCESS,
  GET_BRAND_DESCRIPTION_FAILURE
} from "../Types/Btypes";

export function getBrands() {
  return { type: GET_BRAND };
}
export function getBrandsSuccess(brands) {
  return { type: GET_BRAND_SUCCESS, brands };
}
export function getBrandsFailure(error) {
  return { type: GET_BRAND_FAILURE, error };
}

export function getBrandDesc(id) {
  return { type: GET_BRAND_DESCRIPTION, id };
}
export function getBrandDescSuccess(brandsDes) {
  return { type: GET_BRAND_DESCRIPTION_SUCCESS, brandsDes };
}
export function getBrandDescFailure(error) {
  return { type: GET_BRAND_DESCRIPTION_FAILURE, error };
}
