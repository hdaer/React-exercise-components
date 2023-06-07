import "./DrinkSearch.css";
import { TextInput } from "./ui/TextInput.jsx";
import { useState } from "react";

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState("test drink");

  return (
    <div className="drink-search">
      <label>Search for your drink here:</label>
      <TextInput />
      <div>{searchField}</div>
    </div>
  );
};
