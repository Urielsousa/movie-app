import { Movie } from "@/Types/movie";
import StarRating from "../starRating/starRating";
import "./movieCard.scss";

export interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      <div className="movie-info">
        <p className="movie-title">{movie.title}</p>
        {movie.vote_average > 0 && <StarRating rating={movie.vote_average} />}
      </div>

      <div className="movie-overlay">
        <p className="overlay-title">{movie.title}</p>

        {movie.vote_average > 0 && <StarRating rating={movie.vote_average} />}

        {movie.overview && <p className="description">{movie.overview}</p>}

        <button className="btn-default">Ver mais</button>
      </div>
    </li>
  );
}
