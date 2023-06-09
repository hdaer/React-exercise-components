import "./DrinkList.css";
import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ drinks, clickFn }) => {
  const drinkListItems = drinks.map((drink) => (
    <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
  ));

  return <ul className="drink-list">{drinkListItems}</ul>;
};
