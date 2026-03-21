"use client";

import "./movieList.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "@/Types/types";

import { get } from "http";
import MovieCard from "../movieCard/movieCard";
export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);

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
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
