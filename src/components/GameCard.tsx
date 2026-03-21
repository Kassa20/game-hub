import { Game } from "@/hooks/useGames";
import { Card, CardHeader, Center, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" borderRadius={10} overflow='hidden'>
      <Image src={game.background_image} />
      <Card.Body>
        <CardHeader fontSize='2xl'>{game.name}</CardHeader>
        <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </Card.Body>
      {/* <Card.Footer /> */}
    </Card.Root>
  );
};



/*

GameCard takes the games passed in by the GameGrid and 
builds a card component for each game. We need to build an
interface since the GameCard component takes in a game of type
Game as a parameter by its parent. Use chakraUI for CSS components

*/