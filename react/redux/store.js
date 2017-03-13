import { createStore, combineReducers } from 'redux';
import { coinAReducer, coinBReducer, coinCReducer, coinDReducer } from './reducers/index.js';

var reducers = combineReducers({
  coinA: coinAReducer,
  coinB: coinBReducer,
  coinC: coinCReducer,
  coinD: coinDReducer
});

//define store
export const store = createStore(reducers);


store.subscribe(() => {
  console.log('store state: ', store.getState());
});
