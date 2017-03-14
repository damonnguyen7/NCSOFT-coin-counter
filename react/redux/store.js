import { createStore, combineReducers } from 'redux';
import { coinAReducer, coinBReducer, coinCReducer, coinDReducer } from './reducers/index.js';

var reducers = combineReducers({
  coinA: coinAReducer,
  coinB: coinBReducer,
  coinC: coinCReducer,
  coinD: coinDReducer
});

export const store = createStore(reducers);
