import React, { Fragment, useState } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import "./App.css";

const App = () => {
  const [showCart, SetShowCart] = useState(false) 
  const onCartClose = () => {
     SetShowCart(false)
  }
  const onCartClick =() => {
    SetShowCart(true);
  }
  return (
    <Fragment>
    {(showCart)?<Cart onCartClose={onCartClose}/> :""}
      <Header onCartClick={onCartClick}/>
      <main>
        <Meal />
      </main>
    </Fragment>
  );
};

export default App;
