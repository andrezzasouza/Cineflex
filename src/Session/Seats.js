export default function Seats ( {array} ) {
  let seatStatus = array.isAvailable;
  console.log("seats", array)
  return (
    <div
      className={seatStatus === true ? `seat available` : `seat unavailable`}
    >
      <p className="seat-number">{array.name}</p>
    </div>
  );
}