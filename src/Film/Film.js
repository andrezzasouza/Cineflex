import './film.css';
import FilmTime from './FilmTime';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react'


export default function Film () {
  const { idFilm } = useParams(); 

  const [filmData, setFilmData] = useState(null);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies/${idFilm}/showtimes`
    );

    promise.then(res => {
      setFilmData({...res.data});
    })
  }, []);

  if(filmData === null) {
		return "Loading...";
	}

  return (
    <div className="film-container">
      <div className="page-title">
        <h2>
          Selecione o horário
        </h2>
      </div>
      <div className="time-container">
        {filmData.days.map((sessions, index) =>
          <FilmTime array={sessions} key={index} />
        )}
      </div>
      <footer>
        <div className="selected-poster">
          <img src={filmData.posterURL} alt={`Poster do filme ${filmData.title}`} />
        </div>
        <p>
          {filmData.title}
        </p>
      </footer>
    </div>
  );
}