import useGenres, { Genre } from "@/hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  Link,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
}

export const GenreList = ({ onSelectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" listStyle="none">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            />
            <Link onClick={() => onSelectedGenre(genre)} variant="underline">
              {genre.name}
            </Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
