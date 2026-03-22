import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box maxW="sm" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

/*

container with defined properties that takes a reactNode as a child.
helps keep shared properties central, to avoid duplication.

*/
