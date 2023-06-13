import { Container, Flex } from "@chakra-ui/react";
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
    <Flex
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      as="b"
      fontFamily={"Arial, Helvetica"}
      color={"#f266ab"}
    >
      <TextInput changeFn={handleChange} width={200} marginBottom={8} />

      <DrinkList drinks={matchedDrinks} clickFn={clickFn} />
    </Flex>
  );
};
