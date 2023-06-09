import "./App.css";
import { useState } from "react";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome to our cafe!";

  const [userDrink, setUserDrink] = useState();

  return (
    <div className="App">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink}/>
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </div>
  );
};
