import { Flex } from "@chakra-ui/react";
import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ drinks, clickFn }) => {
  const drinkListItems = drinks.map((drink) => (
    <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
  ));

  return (
    <Flex>
      <ul>{drinkListItems}</ul>
    </Flex>
  );
};
