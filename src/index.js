import React from 'react';
import ReactDOM from 'react-dom';
//import store & the Provider component
import store from './store';
import { Provider } from 'react-redux';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
//wrapping the root component <Game /> in the Provider component from 'react-redux' will allow the store to be connected to the components
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
