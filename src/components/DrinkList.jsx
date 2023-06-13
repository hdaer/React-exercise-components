import { Grid } from "@chakra-ui/react";
import { DrinkItem } from "./DrinkItem";

export const DrinkList = ({ drinks, clickFn }) => {
  return (
    <Grid templateColumns={["repeat(1, 0.5fr)", "repeat(3, 1fr)"]}>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
      ))}
    </Grid>
  );
};
