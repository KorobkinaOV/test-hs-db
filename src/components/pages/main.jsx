import React from 'react';

import CardsByClassList from '../cards-by-class-list';
import RandomClassicCards from '../random-classic-cards';

const Main = () => {
  return(
    <React.Fragment>
      <CardsByClassList />
      <RandomClassicCards />
    </React.Fragment>
  );
};

export default Main;