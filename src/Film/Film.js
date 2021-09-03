import './film.css';
import FilmTime from './FilmTime';

export default function Film () {
  return (
    <div className="film-container">
      <div className="page-title">
        <h2>Selecione o horário</h2>
      </div>
      <FilmTime />
      <FilmTime />
      <footer>
        <div className="selected-poster">
          <img src="" alt="" />
        </div>
        <p>
          Enola Holmes
        </p>
      </footer>
    </div>
  );
}