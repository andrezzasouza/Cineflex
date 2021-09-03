import './session.css'

export default function Session () {
  return (
    <div className="session-container">
      <div className="page-title">
        <h2>Selecione o(s) assento(s)</h2>
      </div>
      <div className="select-seat">
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
        <div className="seat available">
          <p className="seat-number">01</p>
        </div>
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
        <input type="text" placeholder="Digite seu nome..." />
        <p>
          CPF do comprador:
        </p>
        <input type="text" placeholder="Digite seu CPF..." />
      </div>
      <button className="save-seats">
        Reservar assento(s)
      </button>
      <footer>
        <div className="selected-poster">
          <img src="" alt="" />
        </div>
        <div>
          <p>
            Enola Holmes
          </p>
          <p>
            Quinta-feira - 15:00
          </p>
        </div>
      </footer>
    </div>
  );
}