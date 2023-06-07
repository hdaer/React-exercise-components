import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { tea, coffee } from "./utils/data.js";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { useState } from "react";

export const App = () => {
  const greeting = "Welcome to our cafe!";

  const [userDrink, setUserDrink] = useState();

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
          <DrinkSearch />
        </>
      )}
    </div>
  );
};
