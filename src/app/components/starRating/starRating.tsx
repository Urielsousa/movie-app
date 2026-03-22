import "./starRating.scss";
import { MdStarOutline } from "react-icons/md";
import { MdStarRate } from "react-icons/md";

export interface Props {
  rating: number;
}

export default function starRating(props: Props) {
  const numStars = Math.round(props.rating / 2); // Convertendo a classificação de 10 para 5 estrelas

  const fullStars = [];
  const emptyStars = [];

  for (let i = 0; i < numStars; i++) {
    fullStars.push(i);
  }

  for (let i = numStars; i < 5; i++) {
    emptyStars.push(i);
  }
    return (
      <div className="movie-rate">
       
       {fullStars.map(index =>
            <MdStarRate key={index} />
       )}
      
       {emptyStars.map(index =>
         <MdStarOutline key={index}/>
      )}
     
      
      </div>
    );
  }

