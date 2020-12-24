import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Users from './Users';
import Settings from './Settings';

function Main() {
  return (
    <div className="main">

      <Redirect to='/users' />
      <Switch>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
      </Switch>

    </div>
  );
}

export default Main;