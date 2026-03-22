import useGenres, { Genre } from "@/hooks/useGenres";
import React from "react";
import { LightMode } from "./ui/color-mode";
import useData from "@/hooks/useData";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};
