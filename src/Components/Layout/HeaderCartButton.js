import React from "react";
import CartIcon from "../Cart/CartIcon.js";
import "./HeaderCartButton.css";

const HeaderCartButton = (props) => {
  return (
    <button className="button" onClick={props.onCartClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
