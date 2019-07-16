import React from 'react';

import ShowCardImg from '../show-card-img';
import ShowCardDetails from '../show-card-details';
import { getSingleCard } from '../../api';

class SingleCard extends React.Component {
  state = {
    card: {}
  }

  componentDidMount() {
    const path = this.props.history.location.pathname;
    const cardName = path.slice(6);

    getSingleCard(cardName).then((res) => {
      this.setState({
        card: res.data[0],
      });
    });
  };

  render() {
    const { card } = this.state;
    console.log(card);
    return(
      <div className='container'>
        <div className='d-flex flex-wrap justify-content-around align-items-center'>
          <ShowCardImg
            img={card.img}
            name={card.name} />
          <ShowCardImg
            img={card.imgGold}
            name={card.name} />

          <ShowCardDetails card={card} />
        </div>
      </div>
    );
  }
};

export default SingleCard;