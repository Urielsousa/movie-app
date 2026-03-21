import { Movie } from "@/Types/types";
import StarRating from "../starRating/starRating";
export interface Props {
  movie: Movie;
}

export default function MovieCard(props: Props) {
  const movie = props.movie;
  return (
    <li key={movie.id} className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
        />
      </div>


      <div className="movie-info">
        <p className=" movie-title">
            {movie.title}
            </p>
            <StarRating rating={movie.vote_average} />
        
         </div>
   <div className="hiden-content">
    <p className="description">{movie.overview}</p>
   </div>


      <p>{movie.vote_average}</p>
    </li>
  );
}
