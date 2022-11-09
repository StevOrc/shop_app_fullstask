import * as actionType from "../contants/productContants";

// State to handle all the products displayed on the Home screen
const initialStateProducts = {
  products: [],
  loading: false,
  error: null,
};

// State to handle a specific product to display it's details Product screen
const initialStateProductDetail = {
  product: {},
  loading: false,
  error: null,
};

//
export const getProductsReducer = (state = initialStateProducts, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case actionType.GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductDetails = (
  state = initialStateProductDetail,
  action
) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionType.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case actionType.GET_PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case actionType.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
