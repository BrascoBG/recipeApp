import React from "react";
import style from "./recipe.module.css";
import "./fonts/lobster.css";

function Recipe({ title, calories, ingredients, image, loading }) {
  return (
    <div className={style.recipe}>
      <div>
        <h1>{loading ? "Loading..." : title}</h1>
        <h3>{loading ? "Loading..." : calories.toFixed(2)} Calories</h3>
        <ul>
          {ingredients.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
        <img alt="recipe" className={style.img} src={image} />
      </div>
    </div>
  );
}

export default Recipe;
