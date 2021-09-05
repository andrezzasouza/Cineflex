import { useState } from "react";

export default function Seats({
  array,
  selectedSeats, 
  setSelectedSeats,
  selectedArray,
  setSelectedArray,
}) {
  let seatStatus = array.isAvailable;
  console.log("seats", array)
  // console.log("e1", selectedArray)

  const [currentState, setCurrentState] = useState(
    seatStatus ? `seat` : `seat unavailable`
  );

  function alterState(e, seat) {
    if (currentState === `seat`) {
      setCurrentState(`seat selected`);
      console.log("se", seat);
      console.log("e", e);
      const reservedSeat = seat;
      setSelectedSeats([...selectedSeats, reservedSeat]);

      const newSelection = Number(e.target.innerText);
      setSelectedArray([...selectedArray, newSelection]);
    } else {
      setCurrentState(`seat`);
      const removeReservation = selectedSeats.filter(el => el !== seat);
      setSelectedSeats(removeReservation);

      const removeSelection = selectedArray.filter(el => el !== Number(e.target.innerText));
      setSelectedArray(removeSelection);
      
    }
  }

  console.log("se2", selectedSeats);
  console.log("e3", selectedArray);

  function alreadyChosen() {
    alert(
      "Esse assento não está disponível. Favor escolher um assento disponível."
    );
  }

  return (
    <div
      className={currentState}
      onClick={seatStatus ? (e) => alterState(e, array.id) : alreadyChosen}
    >
      <p className="seat-number">{Number(array.name) >= 10 ? array.name : `0${array.name}`}</p>
    </div>
  );
}