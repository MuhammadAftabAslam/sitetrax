/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
// import './favicon.ico'; // Tell webpack to load favicon.ico
// import './images/logo.png';
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

function handleUpdate() {
  let {
    action
  } = this.state.location;

  if (action === 'PUSH') {
    window.scrollTo(0, 1);
  }
}

render(
  <Provider store={store}>
    <Router history={history} routes={routes} onUpdate={handleUpdate} />
  </Provider>, document.getElementById('app')
);
