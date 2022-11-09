import React from "react";
import { useEffect } from "react";
import { useSelector } from 'react-redux'

function CheckoutScreen() {
  const { cartItems } = useSelector(
    (state) => state.cart
  );

  useEffect(() => {
    console.log(cartItems)
  }, []);
  
  return <div>Check out : </div>;
}

export default CheckoutScreen;
