import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Game {
  id: number;
  name: string;
  background_image: string
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
 const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError ) return 
        setError(err.message)
      });
      return () => controller.abort()
  }, []);

  return {games, error}

}

export default useGames;


/*

useGames gets the games we need through an API. Its responsible for 
the /games API calls. When we call the GET games we need to tell it 
the shape of the response we are going to get through an Interface. 
The useGames then returns the games as well as errors.

*/