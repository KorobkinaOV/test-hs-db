import React from 'react';

import { getCardsSet } from '../../api';
import { getRandomsNumbers } from '../../utils/helpers';
import ShowCardImg from '../show-card-img';
import CardList from '../card-list';
import Spinner from '../spinner';

class RandomBaseCards extends React.Component {
  state = {
    baseCards: [],
    selectCard: {},
    loading: true,
  }

  componentDidMount() {
    getCardsSet().then((res) => {
      const randoms = getRandomsNumbers(10, 10, res.data.length);
      const newArr = randoms.map(element => (res.data[element]));
      this.setState({
        baseCards: newArr,
        loading: false
      })
    });
  }

  showDetails = (item) => {
    this.setState({
      selectCard: item
    })
  }

  render() {
    const { baseCards, selectCard, loading } = this.state;

    const RandomCards = () => {
      return(
        <div className='container card mt-5 p-3'>
          <h5>Random classic cards: </h5>
          <div className='d-flex'>
            <CardList
              cards={baseCards}
              showDetails={this.showDetails} />

            { selectCard.img
                ? <ShowCardImg img={selectCard.img} name={selectCard.name} />
                : <div>No image</div>
            }
          </div>
        </div>
      );
    }

    return(
      loading
        ? <Spinner />
        : <RandomCards />
    );
  }
}

export default RandomBaseCards;