import React from 'react'
import { cakeReducer } from './cakeReducers'
import { createStore } from 'redux'
import { buyCake } from './cakeActions';


const store = createStore(cakeReducer,['Use Redux']); 
store.dispatch(buyCake());
console.log(store.getState())

