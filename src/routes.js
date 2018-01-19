// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from './components/App';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Home from './components/Home';
import Page404 from './components/Page404';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/create" component={Create} />
      <Route exact path="/edit/:devId" component={Edit} />
      <Route exact path="/delete/:devId" component={Delete} />
      <Route exact path="/" component={Home} />
      <Route component={Page404} />
    </Switch>
  </App>

export default AppRoutes;