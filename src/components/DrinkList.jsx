import "./DrinkList.css";
import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ drinks }) => {
  const drinkListItems = drinks.map((drink) => (
    <DrinkItem key={drink.id} drink={drink} />
  ));

  return <ul className="drink-list">{drinkListItems}</ul>;
};
