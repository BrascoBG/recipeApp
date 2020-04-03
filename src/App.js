import React, { useEffect, useState } from "react";
import Recipe from "./components/recipe";

function App() {
  const API_ID = "7264b995";
  const API_KEY = "7ba9109375935d876f8d54c312661832";
  const [content, setContent] = useState([]);
  const [food, setFood] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, [search]);

  const getData = () => {
    setLoading(true);
    fetch(
      `https://api.edamam.com/search?q=${food}&app_id=${API_ID}&app_key=${API_KEY}`
    )
      .then(response => response.json())
      .then(data => setContent(data.hits));
    setFood("");
    setLoading(false);
  };

  const getFood = e => {
    e.preventDefault();
    setSearch(food);
  };

  return (
    <div className="wrapper">
      <form onSubmit={getFood}>
        <input
          type="text"
          value={food}
          onChange={e => setFood(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {content.map(items => (
        <Recipe
          key={items.recipe.label}
          title={items.recipe.label}
          calories={items.recipe.calories}
          ingredients={items.recipe.ingredientLines}
          image={items.recipe.image}
          loading={loading}
        />
      ))}
    </div>
  );
}

export default App;
