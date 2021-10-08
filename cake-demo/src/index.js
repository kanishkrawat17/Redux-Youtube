import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux';
import App from './App';
import { cakeReducers } from './redux/cake/cakeReducers';
import { icecreamReducers } from './redux/cake/icecream/icecreamReducers';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const rootReducer  = combineReducers ({
  cakes : cakeReducers,
  icecreams : icecreamReducers
}) 
const store = createStore(rootReducer,applyMiddleware(logger));
console.log(store.getState())
//creation of store that takes reducer in arguments

// To make our redux-store available to our react application we will use <Provider /> component , it basically makes our
// redux-store available to whole application. now we want to know that how our components can dispatch an action.

ReactDOM.render(
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById('root')
)