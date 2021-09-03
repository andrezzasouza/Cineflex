import { Link } from "react-router-dom"

// pegar imagem do axios por props?
// pegar link por props?

export default function FilmPoster (props) {
  return (
      <div className="poster-container">
        <img src={props.img} alt={`Poster do filme ${props.alt}`} />
      </div>
  );
}