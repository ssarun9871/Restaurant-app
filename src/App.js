import React, { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import Cart from "./Components/Cart/Cart";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
};

export default App;
