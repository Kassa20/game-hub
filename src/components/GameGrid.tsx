import useGames, { Platform } from "@/hooks/useGames";
import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { GameCard } from "./GameCard";
import { GameCardSkeleton } from "./GameCardSkeleton";
import { GameCardContainer } from "./GameCardContainer";
import { Genre } from "@/hooks/useGenres";
import { GameQuery } from "@/App";

interface Props {
    gameQuery: GameQuery;

}

export const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding="10px" gap="30px">
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}/>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

/*

GameGrid builds a grid to  display games. It gets the games from the 
useGames service, which is responsible for getting all the games using 
an API. It uses a GameCard to display the games. We need to pass in
the games as Properties to the GameCard so it can populate its card.

Display skeletons while loading. 

*/
