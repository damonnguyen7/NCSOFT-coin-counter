import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

import CoinCounterContainer from './CoinCounterContainer.js';

ReactDOM.render(<Provider store={ store } ><CoinCounterContainer /></Provider>, document.getElementById('App'));
