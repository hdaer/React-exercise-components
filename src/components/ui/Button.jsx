import { Button as CButton } from "@chakra-ui/react";

export const Button = ({ clickFn, ...props }) => {
  return (
    <CButton onClick={clickFn} marginTop={"2rem"} color={"#FA7070"} {...props}>
      {props.children}
    </CButton>
  );
};
