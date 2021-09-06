import './session.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Seats from './Seats';

export default function Session ( { setConfirmation, selectedArray, setSelectedArray} ) {

  const { idSession } = useParams();

  const [allSeats, setAllSeats] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([])

  const [username, setUsername] = useState("");
  const [userDocument, setUserDocument] = useState("");

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/showtimes/${idSession}/seats`
    );

    promise.then(res => {
      console.log("resdata2", res.data);
      setAllSeats({...res.data});
    })

  }, []);

  if (allSeats === null) {
    return "Loading...";
  }

  const canOrder = selectedSeats.length > 0 && username.length > 0 && userDocument.length > 0;

  function errorMessage() {
    alert("Favor selecionar os assentos e preencher os dados para completar o pedido.")
  }
  

  function sendBuyerData() {
    const orderedSeats = selectedSeats.sort((a, b) => a - b);
  
    const reservation = {
      ids: orderedSeats,
      name: username,
      cpf: userDocument,
    };

    const order = {
      movie: allSeats.movie.title,
      date: allSeats.day.date,
      hour: allSeats.name,
      seats: selectedArray,
      name: username,
      cpf: userDocument,
    };

    setConfirmation(order);

    function failure (response) {
      console.log("f", response)
    }
    console.log(reservation)
    const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v3/cineflex/seats/book-many', reservation)
    // promise.then(success)
    promise.catch(failure)
    setUsername("");
    setUserDocument("");
    setSelectedSeats([]);
  }

  return (
    <div className="session-container">
      <div className="page-title">
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      <div className="select-seat">
        {allSeats.seats.map((seat, index) => (
          <Seats
            array={seat}
            key={index}
            selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats}
            selectedArray={selectedArray}
            setSelectedArray={setSelectedArray}
          />
        ))}
      </div>
      <div className="subtitles">
        <div>
          <div className="seat selected"></div>
          <p>Selecionado</p>
        </div>
        <div>
          <div className="seat available"></div>
          <p>Disponível</p>
        </div>
        <div>
          <div className="seat unavailable"></div>
          <p>Indisponível</p>
        </div>
      </div>
      <div className="insert-data">
        <p>Nome do comprador:</p>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>CPF do comprador:</p>
        <input
          type="text"
          placeholder="Digite seu CPF..."
          value={userDocument}
          onChange={(e) => setUserDocument(e.target.value)}
        />
      </div>
      {canOrder ? (
        <Link to="/sucesso">
          <button className="save-seats" onClick={sendBuyerData}>
            Reservar assento(s)
          </button>
        </Link>
      ) : (
        <>
          <button className="save-seats" onClick={errorMessage}>
            Reservar assento(s)
          </button>
        </>
      )}
      <footer>
        <div className="selected-poster">
          <img
            src={allSeats.movie.posterURL}
            alt={`Poster do filme ${allSeats.movie.title}`}
          />
        </div>
        <div>
          <p>{allSeats.movie.title}</p>
          <p>
            {allSeats.day.weekday} - {allSeats.name}
          </p>
        </div>
      </footer>
    </div>
  );
}