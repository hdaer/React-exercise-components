import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Flex
      h={"100vh"}
      justify={"center"}
      alignItems={"center"}
      backgroundColor={"#9BABB8"}
    >
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Flex>
  </React.StrictMode>
);
