import React, { Fragment } from "react";
import Header from "./Components/Layout/Header";
import Meal from "./Components/Meals/Meal";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Meal />
      </main>
    </Fragment>
  );
};

export default App;
