import { Heading, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";

export const App = () => {
  const greeting = "Welcome to our cafe!";

  const [userDrink, setUserDrink] = useState();

  return (
    <Flex
      flexDir={"column"}
      w={"75vw"}
      h={"90vh"}
      backgroundColor={"#c4dfdf"}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={"5%"}
    >
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading marginBottom={8} fontSize={"3xl"} color={"blue.400"}>
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </Flex>
  );
};
