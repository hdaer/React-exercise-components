import { Button } from "./ui/Button";
import {
  Flex,
  Text,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  ButtonGroup,
} from "@chakra-ui/react";

export const DrinkChoice = ({ drink, clickFn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        flexDir={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={"1rem"}
        as="b"
        fontFamily={"Arial, Helvetica"}
        color={"#f266ab"}
      >
        <Heading fontSize={"2xl"}>You have chosen: {drink.name}</Heading>
        <img src={drink.imgUrl} alt={drink.alt} width="100" height="100" />
        <Text>Your drink will be ready in a few minutes</Text>
        <ButtonGroup flexDir={"row"}>
          <Button onClick={onOpen}>Confirm order</Button>
          <Button onClick={() => clickFn()} variant="ghost" fontSize="14">
            Change selection
          </Button>
        </ButtonGroup>
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} as="b" size={["full", "md"]}>
        <ModalOverlay />

        <ModalContent border="2px solid red">
          <ModalHeader>Confirm your order</ModalHeader>
          <ModalCloseButton />

          <ModalBody
            height={("full", "fit-content")}
            display={"flex"}
            justifyContent="center"
            alignItems={["center", "flex-start"]}
            border="2px solid red"
            flexDir={"column"}
          >
            <Text color="#f266ab" as="b">
              1x {drink.name}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3}>
              Confirm
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
