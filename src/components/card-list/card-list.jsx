import React from 'react';
import './card-list.css';

const CardList = ({ cards, showDetails }) => {
  return(
    <ul className="list-group card-list mr-5">
      {
        cards.map((item, index) => (
          <li
            className="list-group-item d-flex align-items-center"
            key={`${item.cardId}${index}`}
            onClick={() => showDetails(item)}
          >
            {item.name}
          </li>
        ))
      }
    </ul>
  );
};

export default CardList;