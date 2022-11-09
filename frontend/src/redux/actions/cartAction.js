import * as actionTypes from "../contants/cartConstant";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const {
    data: { _id, name, imageUrl, countInStock, price },
  } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CAR,
    payload: {
      product: _id,
      name,
      imageUrl,
      price,
      countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeToCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
