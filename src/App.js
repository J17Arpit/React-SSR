import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';

export default props => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="*"
          render={props => <Home {...props} />}
        />
      </Switch>
    </>
  );
};