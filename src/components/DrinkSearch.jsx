import "./DrinkSearch.css";
import { TextInput } from "./ui/TextInput.jsx";
import { useState } from "react";
import { availableDrinks } from "../utils/data.js";
import { DrinkList } from "./DrinkList.jsx";

export const DrinkSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("test drink");

  return (
    <div className="drink-search">
      <label>Search for your drink here:</label>
      <TextInput />
      <div>{searchField}</div>
      <DrinkList drinks={availableDrinks} clickFn={clickFn} />
    </div>
  );
};
