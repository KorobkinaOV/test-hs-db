import React from 'react';

import './show-card-img.css';

class ShowCardImg extends React.Component {

  state = {
    error: false
  }

  render() {
    const { error } = this.state;
    const { img, name, ShowMoreDetails = () =>  null, classStyle } = this.props;
    return(
      !error
        ? <img
          className={classStyle}
          src={img}
          alt={name}
          onClick={() => ShowMoreDetails(name)}
          onError={() => this.setState({error: true})} />
        : null
    );
  }
};

export default ShowCardImg;