import React, { Fragment } from "react";
import MealSummary from "./MealSummary";
import MealList from "./AvailableMeals";

const Meal = () => {
  return (
    <Fragment>
      <MealSummary />
      <MealList />
    </Fragment>
  );
};

export default Meal;
