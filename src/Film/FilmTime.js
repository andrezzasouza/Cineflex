import { Link } from 'react-router-dom';

export default function FilmTime ({array}) {

  console.log("props", array)
  // console.log("pA", props.array);
  // console.log("pAS", props.array.showtimes.id);
  // console.log("pAI", props.array.id);

  // const idSession = props.array.array.showtimes.id;
  

  return(
    <div className="time-container">
      {array.days.map(day =>
        <div>
          <h3>
            {day.weekday}
          </h3>
          
          {day.showtimes.map(hours =>
            <Link to={`/assentos/${hours.id}`}>
              <button>
                {hours.name}
              </button>
            </Link>
          )}
        </div>
      )}
  </div>    
  );
}