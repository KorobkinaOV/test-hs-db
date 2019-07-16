import React from 'react';
import { withRouter } from 'react-router-dom';

import Spinner from '../spinner';
import { getInfo } from '../../api';
import './cards-by-class-list.css';

class CardsByClassList extends React.Component {
  state = {
    classes : [],
    loading: true,
  }

  componentDidMount() {
    getInfo().then((res) => {
      this.setState({
        classes: res.data.classes,
        loading: false,
      })
    });
  }

  render() {
    const { classes, loading } = this.state;
    const { history } = this.props;
    const ClassList = () => {
      return(
        <div className='container card pt-2 mt-5'>
          <h5 className='pt-2 pb-2'>Select class</h5>
          <ul className='d-flex justify-content-between card-class-list'>
            {
              classes && classes.map((i, index) => (
                i !== 'Death Knight' &&
                  <li
                    key={index}
                    onClick={() => history.push(`/cards/${i}`)}
                  >
                    {i}
                  </li>
              ))
            }
          </ul>
        </div>
      );
    }
    return(
      loading
        ? <Spinner />
        : <ClassList />
    );
  }
}

export default withRouter(CardsByClassList);