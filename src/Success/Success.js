import './success.css';
import { Link } from 'react-router-dom';

export default function Success ( { confirmation, setSelectedArray }) {

  const seatsArray = confirmation.seats.sort((a, b) => a - b);

  const newSeatsArray = seatsArray.map(orderedSeat => orderedSeat >= 10 ? orderedSeat : `0${orderedSeat}`);

  function clearSeats () {
    setSelectedArray([]);
  }

  return (
    <div className="success-container">
      <div className="success-message">
        <h2>Pedido feito com sucesso!</h2>
      </div>
      <div className="film-data">
        <h3>Filme e sessão</h3>
        <p>{confirmation.movie}</p>
        <p>{confirmation.date} {confirmation.hour}</p>
      </div>
      <div className="seat-data">
        <h3>Ingressos</h3>
        {newSeatsArray.map((seat, index) =>
         <p key={index}>Assento {seat}</p>
        )}
      </div>
      <div className="buyer-data">
        <h3>
          Comprador
        </h3>
        <p>
          Nome: {confirmation.name}
        </p>
        <p>
          CPF: {confirmation.cpf}
        </p>
      </div>
      <Link to="/">
        <button onClick={clearSeats}>
          Voltar pra Home
        </button>
      </Link>
    </div>
  );
}