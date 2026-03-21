import { Game } from "@/hooks/useGames";
import {
  Card,
  CardHeader,
  Center,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { CriticScore } from "./CriticScore";
import getCroppedImageUrl from "@/services/image-url";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card.Root maxW="sm" borderRadius={10} overflow="hidden" width='300px'>
      <Image src={game.background_image} />
      <Card.Body>
        <CardHeader fontSize="2xl">{game.name}</CardHeader>
        <HStack justifyContent='space-between'>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
      {/* <Card.Footer /> */}
    </Card.Root>
  );
};

/*

GameCard takes the games passed in by the GameGrid component and 
builds a card component for each game. We need to build an
interface since the GameCard component takes in a game of type
Game as a parameter by its parent. Use chakraUI for CSS components.

*/
