import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import App from './App';
import { cakeReducers } from './redux/cake/cakeReducers';

const store = createStore(cakeReducers);
//creation of store that takes reducer in arguments

// To make our redux-store available to our react application we will use <Provider /> component , it basically makes our
// redux-store available to whole application. now we want to now that how our components can dispatch an action.

ReactDOM.render(
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById('root')
)