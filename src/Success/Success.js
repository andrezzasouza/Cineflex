import './success.css';

export default function Success () {
    return (
      <div className="success-container">
        <div className="success-message">
          <h2>Pedido feito com sucesso!</h2>
        </div>
        <div className="film-data">
          <h3>Filme e sessão</h3>
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>
        <div className="seat-data">
          <h3>Ingressos</h3>
          <p>Assento 15</p>
          <p>Assento 16</p>
        </div>
        <div className="buyer-data">
          <h3>
            Comprador
          </h3>
          <p>
            Nome: João da Silva Sauro
          </p>
          <p>
            CPF: 123.456.789-10
          </p>
        </div>
        <button>
          Voltar pra Home
        </button>
      </div>
    );
}