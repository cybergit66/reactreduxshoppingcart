import { combineReducers } from 'redux';
import itemReducer from './item.js';
import shoppingCartReducer from './shoppingCart.js';

const rootReducer = combineReducers({
  items: itemReducer,
  shoppingCart: shoppingCartReducer,
});

export default rootReducer;
