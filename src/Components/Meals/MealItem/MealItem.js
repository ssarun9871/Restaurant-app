import React from "react";
import "./MealItem.js";
import MealItemForm from "./MealItemForm.js";
import "./MealItem.css"

const MealItem = (props) => {
  const { meal } = props;
  console.log(props);
  return (
    <li key={meal.id} id={meal.id} className="meal">
      <div>
        <h3>{meal.name}</h3>
        <div className="description">{meal.description}</div>
        <div className="price">{`$${meal.price}`}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} />
      </div>
    </li>
  );
};

export default MealItem;
