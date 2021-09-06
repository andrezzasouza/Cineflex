import './home.css';
import FilmPoster from './FilmPoster';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home () {

  const [film, setFilm] = useState([]);

  useEffect(() => {
    const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/movies');

    promise.then(response => {
    setFilm(response.data)
  })
  }, []);

  return (
    <div className="home-container">
      <div>
        <h2>Selecione o filme</h2>
      </div>
      <main>
        {film.map((poster, index) => 
          <Link to={`/sessoes/${poster.id}`}>
            <FilmPoster img={poster.posterURL} alt={poster.title} key={index} />
          </Link>
        )}
      </main>
    </div>
  );
}