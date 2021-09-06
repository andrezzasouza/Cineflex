export default function FilmPoster ({ img, alt }) {


  return (
      <div className="poster-container">
        <img src={img} alt={`Poster do filme ${alt}`} />
      </div>
  );
}