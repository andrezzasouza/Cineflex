import './session.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Seats from './Seats';

export default function Session () {

  const { idSession } = useParams();

  const [selectedSeats, setSelectedSeats] = useState(null);
  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSession}/seats`
    );

    promise.then(res => {
      console.log("resdata2", res.data);
      setSelectedSeats({...res.data});
    })

  }, []);

  if (selectedSeats === null) {
    return "Loading...";
  }

  return (
    <div className="session-container">
      <div className="page-title">
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      <div className="select-seat">
        {selectedSeats.seats.map(seat =>
          <Seats array={seat} />
        )}
      </div>
      <div className="subtitles">
        <div>
          <div className="seat selected">
          </div>
          <p>Selecionado</p>
        </div>
        <div>
          <div className="seat available">
          </div>
          <p>Disponível</p>
        </div>
        <div>
          <div className="seat unavailable">
          </div>
          <p>Indisponível</p>
        </div>
      </div>
      <div className="insert-data">
        <p>
          Nome do comprador:
        </p>
        <input 
          type="text" 
          placeholder="Digite seu nome..." 
        />
        <p>
          CPF do comprador:
        </p>
        <input 
          type="text" 
          placeholder="Digite seu CPF..." 
        />
      </div>
      <button className="save-seats">
        Reservar assento(s)
      </button>
      <footer>
        <div className="selected-poster">
          <img 
            src={selectedSeats.movie.posterURL} 
            alt={`Poster do filme ${selectedSeats.movie.title}`} 
          />
        </div>
        <div>
          <p>
            {selectedSeats.movie.title}
          </p>
          <p>
            {selectedSeats.day.weekday} - {selectedSeats.name}
          </p>
        </div>
      </footer>
    </div>
  );
}