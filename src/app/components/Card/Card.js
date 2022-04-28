import './card.css';

function Card(props) {
  return (
    <div className="card">
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={props.monster.name} />
      <div className="card-name">{props.monster.name}</div>
      <div className="card-email">{props.monster.email}</div>
    </div>
  );
}

export default Card;