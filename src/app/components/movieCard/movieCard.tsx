
import { Movie } from "@/Types/types"
export interface Props {
    movie: Movie
}







export default function MovieCard(props: Props) {
    const movie = props.movie
    return (
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

                <p>
                    {movie.vote_average}
                </p>

         </li>)}