import { Flex, Image, Text } from "@chakra-ui/react";

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <Flex
      minWidth={28}
      columnGap={2}
      cursor={"pointer"}
      align={"center"}
      onClick={() => clickFn(drink)}
      margin={"1rem"}
    >
      <Image src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
      <Text>{drink.name}</Text>
    </Flex>
  );
};
