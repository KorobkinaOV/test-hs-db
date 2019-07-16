import React from 'react';

const ShowCardDetails = ({ card }) => {
  return(
    <div className='card-details'>
      <ul className="list-group">
        <li className="list-group-item d-flex align-items-center">
          Name: {card.name}
        </li>
        <li className="list-group-item d-flex align-items-center">
          Player class: {card.playerClass}
        </li>
        <li className="list-group-item d-flex align-items-center">
          Set: {card.cardSet}
        </li>
        <li className="list-group-item d-flex align-items-center">
          Rarity: {card.rarity}
        </li>
        <li className="list-group-item d-flex align-items-center">
          Type: {card.type}
        </li>
      </ul>
    </div>
  )
};

export default ShowCardDetails;