import useGenres from "@/hooks/useGenres";
import React from "react";
import { LightMode } from "./ui/color-mode";

export const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
