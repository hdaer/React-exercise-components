import "./DrinkSearch.css";
import { TextInput } from "./ui/TextInput.jsx";
import { useState } from "react";
import { availableDrinks } from "../utils/data.js";
import { DrinkList } from "./DrinkList.jsx";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="drink-search">
      <label>Search for your drink</label>
      <TextInput changeFn={handleChange} />
      <div>{searchField}</div>
      <DrinkList drinks={matchedDrinks} clickFn={clickFn} />
    </div>
  );
};
