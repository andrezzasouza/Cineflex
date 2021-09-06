import { Link } from 'react-router-dom';
import Button from './Button.js'

export default function FilmTime ( {array} ) {  

  return (
    <>
      <div>
        <h3>{`${array.weekday} - ${array.date}`}</h3>
      </div>
      <div>
        {array.showtimes.map((hours, index) => (
          <Link to={`/assentos/${hours.id}`}>
            <Button hours={hours.name} key={index} />
          </Link>
        ))}
      </div>
    </>
  );
}