import { Link } from 'react-router-dom';
import Button from './Button.js'

export default function FilmTime ( {array} ) {

  console.log("props", array)
  // console.log("pA", props.array);
  // console.log("pAS", props.array.showtimes.id);
  // console.log("pAI", props.array.id);

  // const idSession = props.array.array.showtimes.id;
  

  return (
    <>
      <div>
        <h3>{`${array.weekday} - ${array.date}`}</h3>
      </div>
      <div>
        {array.showtimes.map((hours) => (
          <Link to={`/assentos/${hours.id}`}>
            <Button hours={hours.name} />
          </Link>
        ))}
      </div>
    </>
  );
}