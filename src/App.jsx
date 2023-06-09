import "./App.css";
import { useState } from "react";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { DrinkItem } from "./components/DrinkItem";

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
          <DrinkSearch />
        </>
      )}
    </div>
  );
};
