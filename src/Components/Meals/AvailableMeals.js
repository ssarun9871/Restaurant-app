import React from "react";
import "./AvailableMeals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealList = () => {
  return (
    <section className="listbox">
      <ul>
        {DUMMY_MEALS.map((meal) => 
           (<li className="list" key={meal.id} id={meal.id}>
            <p className="name">{meal.name}</p>
            <p className="description">{meal.description}</p>
            <p className="price">{`$${meal.price}`}</p>
            <hr/>
          </li>)
        )}
      </ul>
    </section>
  );
};

export default MealList;
