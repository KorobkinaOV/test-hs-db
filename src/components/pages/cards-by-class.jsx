import React from 'react';
import { withRouter } from 'react-router-dom';

import { getCardsByClass } from '../../api';
import Spinner from '../spinner';
import ShowCardImg from '../show-card-img';

class CardsByClass extends React.Component {

  state = {
    cards: [],
    loading: true,
  }

  componentDidMount() {
    const { history } = this.props;
    const classFromPath = history.location.pathname.slice(7);

    getCardsByClass(classFromPath).then((res) => {
      this.setState({
        cards: res.data,
        loading: false,
      })
    })
  }

  handlePageChange = (number) => {
    this.setState({
      activePage: number
    })
  }

  ShowMoreDetails = (name) => {
    this.props.history.push(`/card/${name}`)
  }

  render() {
    const { loading, cards } = this.state;

    const Cards = () => {
      return(
        <div className='container card'>
          <div className='d-flex flex-wrap'>
          {
             cards.map((item) => (
              item.img &&
                <ShowCardImg
                  key={item.cardId}
                  img={item.img}
                  classStyle='card-style'
                  ShowMoreDetails={this.ShowMoreDetails}
                  name={item.name} />
            ))
          }
          </div>
        </div>
      );
    }

    return(
      loading
        ? <Spinner />
        : <Cards />
    );
  }
}

export default withRouter(CardsByClass);