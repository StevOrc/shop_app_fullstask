import "./CartScreen.css";
import React from "react";
import CartItem from "../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as cartItemHelper from "../helpers/cart-items";
import {
  addToCart as addToCartAction,
  removeToCart as removeToCartAction,
} from "../redux/actions/cartAction";

function CartScreen() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const router = useHistory();

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCartAction(id, qty));
  };

  const removeFromCart = (id) => {
    dispatch(removeToCartAction(id));
  };

  const onCheckOut = () => {
    router.push("/checkout");
  };

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>
          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeFromCart={removeFromCart}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal : {cartItemHelper.getCartCount(cartItems)} item(s)</p>
            <p>$ {cartItemHelper.getSubTotal(cartItems).toFixed(2)}</p>
          </div>
          <div>
            <button onClick={onCheckOut}>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartScreen;
