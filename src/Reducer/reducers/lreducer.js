import produce from "immer";
import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_SEARCH,
  GET_SEARCH_SUCCESS,
  GET_SEARCH_FAILURE
} from "../../login/types/ltypes";
import {
  GET_CHOCOLATE,
  GET_CHOCOLATE_SUCCESS,
  GET_CHOCOLATE_FAILURE,
  GET_CHOCOLATE_DESCRIPTION,
  GET_CHOCOLATE_DESCRIPTION_SUCCESS,
  GET_CHOCOLATE_DESCRIPTION_FAILURE
} from "../../Chocolate/Types/chocolateTypes";
import {
  GET_BRAND,
  GET_BRAND_DESCRIPTION_SUCCESS,
  GET_BRAND_DESCRIPTION_FAILURE,
  GET_BRAND_DESCRIPTION,
  GET_BRAND_SUCCESS,
  GET_BRAND_FAILURE
} from "../../Brands/Types/Btypes";

const initialState = {
  users: [],
  brands: [],
  chocolates: [],
  chocolatesDec: [],
  brandsDes: [],
  searchData: [],
  isLoading: false
};
export default function loginReducer(prevState = initialState, action) {
  return produce(prevState, draft => {
    switch (action.type) {
      case GET_USER:
        draft.isLoading = true;
        break;

      case GET_USER_SUCCESS:
        draft.isLoading = false;
        draft.users = action.users;
        break;

      case GET_USER_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;

      case GET_CHOCOLATE:
        draft.isLoading = true;
        break;

      case GET_CHOCOLATE_SUCCESS:
        draft.isLoading = false;
        draft.chocolates = action.chocolates;
        break;

      case GET_CHOCOLATE_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;

      case GET_BRAND:
        draft.isLoading = true;
        break;

      case GET_BRAND_SUCCESS:
        draft.isLoading = false;
        draft.brands = action.brands;
        break;

      case GET_BRAND_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      case GET_CHOCOLATE_DESCRIPTION:
        draft.isLoading = true;
        break;

      case GET_CHOCOLATE_DESCRIPTION_SUCCESS:
        draft.isLoading = false;
        draft.chocolatesDec = action.chocolatesDec;
        break;

      case GET_CHOCOLATE_DESCRIPTION_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;

      case GET_BRAND_DESCRIPTION:
        draft.isLoading = true;
        break;

      case GET_BRAND_DESCRIPTION_SUCCESS:
        draft.isLoading = false;
        draft.brandsDes = action.brandsDes;
        break;

      case GET_BRAND_DESCRIPTION_FAILURE:
        draft.isLoading = false;
        draft.error = action.error;
        break;
      case GET_SEARCH:
        draft.isLoading = true;
        draft.text = action.text;
        break;

      case GET_SEARCH_SUCCESS:
        draft.isLoading = false;
        draft.searchData = action.searchData;
        break;

      case GET_SEARCH_FAILURE:
        draft.isLoading = false;
        draft.searchData = action.error;
        break;
    }
  });
}
