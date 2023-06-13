import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <>
      <InputGroup>
        <InputLeftAddon color={"#FA7070"}>Search Drink</InputLeftAddon>
        <Input
          variant="filled"
          type="search"
          placeholder="type here..."
          size="md"
          marginBottom={8}
          onChange={changeFn}
          {...props}
        />
      </InputGroup>
    </>
  );
};
