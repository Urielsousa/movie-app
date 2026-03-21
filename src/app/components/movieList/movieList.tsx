"use client";

import "./movieList.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export interface MovieType {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}


import { get } from "http";
export default function MovieList() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "b9f9a5be58bcdd8d4aeda8cf5e614e9a",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <ul className="movie-list">
        {movies.map((movie) => 
         <li key={movie.id} className="movie-card"> 
                <p>
                {movie.title}
                </p>

                <p className="description">
                    {movie.overview}
                </p>

                <p>
                    <img src = {`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
                </p>


         </li>)}
     
    </ul>
  );
}
