import "./CartItem.css";
import React from "react";
import { Link } from "react-router-dom";

function CartItem({ item, qtyChangeHandler, removeFromCart }) {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p> {item.name} </p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <select
        className="cartItem__select"
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((el) => {
          return (
            <option key={el + 1} value={el + 1}>
              {el + 1}
            </option>
          );
        })}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeFromCart(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default CartItem;
