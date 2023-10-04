import React, {Fragment} from "react";
import mealImage from "../../assets/meal.jpg"
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartClick={props.onCartClick}/>
      </header>
      <div className="main-image">
      <img src={mealImage} alt="A table full delicious food!"/>
      </div>
      
    </Fragment>
  );
};

export default Header;
