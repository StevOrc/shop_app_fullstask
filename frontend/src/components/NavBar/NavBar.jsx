import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar({ onClickBurger }) {
  const { cartItems } = useSelector((state) => state.cart);

  const getCartCounts = () => {
    return cartItems.reduce((acc, el) => {
      return +el.qty + acc;
    }, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Shop app</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge"> {getCartCounts()} </span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={onClickBurger}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default NavBar;
