'use client';

import "./movieList.scss";
import { useState } from "react";
import axios from "axios";
import { get } from "http";
export default function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies = () => {
    axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "b9f9a5be58bcdd8d4aeda8cf5e614e9a",
        language: "pt-BR",
      },
    }).then((response) => {
      console.log(response);
    });
  };



getMovies();




  return (
    <ul className="movie-list">
      <li> </li>
    </ul>
  );
}
