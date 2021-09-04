export default function Seats ( {array} ) {
  let seatStatus = array.isAvailable;
  // console.log("seats", array)

  const clickedSeats = [];

  function alterState(e, seat) {
    //selecionar item
    //remover seleção
    console.log("se", seat)
    clickedSeats.push(e.target.innerText)
    console.log("e", clickedSeats);
  }
  console.log("e2", clickedSeats);

  function alreadyChosen() {

  }

  return (
    <div
      className={seatStatus ? `seat` : `seat unavailable`}
      onClick={seatStatus === true ? alreadyChosen : (e) => alterState(e, array.id))}
    >
      <p className="seat-number">{array.name}</p>
    </div>
  );
}