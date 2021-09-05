import { useState } from "react";

export default function Seats ( {array} ) {
  let seatStatus = array.isAvailable;
  // console.log("seats", array)

  // talvez vou precisar do useEffect pra evitar que um assento seja desmarcado quando clicar em outro

  const [currentState, setCurrentState] = useState(seatStatus ? `seat` : `seat unavailable`)
  const [selectedArray, setSelectedArray] = useState([]);
  

  function alterState(e, seat) {

    if (currentState === `seat`) {
      setCurrentState(`seat selected`);
      console.log("se", seat);
      const newSelection = [...selectedArray, Number(e.target.innerText)];
      setSelectedArray(newSelection);
      // criar array com os selecionados
    } else {
      setCurrentState(`seat`)
      // remover assento do array de assentos selecionados
    }   
  }

  console.log("e3", selectedArray);

  function alreadyChosen() {
    alert("Esse assento não está disponível. Favor escolher um assento disponível.")
  }

  return (
    <div
      className={currentState}
      onClick={seatStatus ? (e) => alterState(e, array.id) : alreadyChosen}
    >
      <p className="seat-number">{array.name}</p>
    </div>
  );
}