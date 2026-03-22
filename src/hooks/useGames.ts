import useData from "./useData";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform: Platform}[];
  metacritic: number;
}

const useGames = () => useData<Game>('/games')

export default useGames;


/*

useGames gets the games we need through an API. Its responsible for 
the /games API calls. When we call the GET games we need to tell it 
the shape of the response we are going to get through an Interface. 
The useGames then returns the games as well as errors.

*/