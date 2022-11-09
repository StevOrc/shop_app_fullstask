export const getCartCount = (cartItems) => {
  return cartItems.reduce((acc, el) => {
    return +el.qty + acc;
  }, 0);
};

export const getSubTotal = (cartItems) => {
  return cartItems.reduce((acc, el) => {
    return +el.price * +el.qty + acc;
  }, 0);
};
