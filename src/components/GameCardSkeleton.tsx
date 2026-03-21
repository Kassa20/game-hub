import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

export const GameCardSkeleton = () => {
  return (
    <Card.Root maxW="sm" borderRadius={10} overflow="hidden" width='300px'>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};
