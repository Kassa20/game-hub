import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};


/*

Skeleton component to be rendered while page is loading. 
has the same structure as the GameCard component. 

*/