import React from 'react';
import { Route, IndexRoute } from 'react-router';
import * as actions from './actions/apiActions';

import App from './components/App';
import DashboardPage from './pages/DashboardPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={DashboardPage}/>
  </Route>
);
