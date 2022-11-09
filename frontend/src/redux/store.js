import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// Reducers
import { cartReducer } from "./reducers/cartReducer";
import {
  getProductDetails,
  getProductsReducer,
} from "./reducers/productReducer";

const reducers = combineReducers({
  cart: cartReducer,
  products: getProductsReducer,
  productDetails: getProductDetails,
});

const middlewares = [reduxThunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
