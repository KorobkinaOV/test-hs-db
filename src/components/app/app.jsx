import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from '../header';
import { Main, CardsByClass, SingleCard } from '../pages';

const App = () => {
  return(
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route
            path='/'
            component={Main}
            exact
          />
          <Route path='/cards/:class' component={CardsByClass} />
          <Route path='/card/:name' component={SingleCard} />
          <Route render={() => <h3 className='container pt-5'>Страница не найдена.</h3>} />

        </Switch>
      </Router>
    </React.Fragment>
  )
}

export default App;