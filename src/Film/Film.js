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
      console.log("resdata", res.data)
      setFilmData({...res.data});
    })
  }, []);

  if(filmData === null) {
		return "Loading";
	}

  // console.log("data", data)

  return (
    <div className="film-container">
      <div className="page-title">
        <h2>Selecione o horário</h2>
      </div>
      {console.log("fD", filmData)}
      {filmData.days.map(sessions =>
        <FilmTime array={filmData} />
      )}
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