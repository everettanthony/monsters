import Card from './Card';
import './card.css';

function CardList(props) {
  return (
    <div className="card-list">
      {props.monsters.map(mon => (
        <Card key={mon.id} monster={mon} />
      ))}
    </div>
  );
}

export default CardList;