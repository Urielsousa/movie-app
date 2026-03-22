"use client";

import "./movieList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/Types/types";
import MovieCard from "../movieCard/movieCard";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "b9f9a5be58bcdd8d4aeda8cf5e614e9a",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }
    




  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
