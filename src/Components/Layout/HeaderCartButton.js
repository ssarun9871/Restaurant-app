import React from "react";
import CartIcon from "../Cart/CartIcon.js";
import "./HeaderCartButton.css";

const HeaderCartButton = () => {
  return (
    <button className="button">
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">0</span>
    </button>
  );
};

export default HeaderCartButton;
