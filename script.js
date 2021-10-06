const redux = require("redux");
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;


const BUY_CAKE = "BUY_CAKE"; // action-name
const BUY_ICECREAM = "BUY_ICECREAM"; // action-name

const initialCakeState = {
  //initial state of cakes
  noOfCakes: 40,
};

const initialIcecreamState = {
  //initial state of icecreams
  noOfIcecreams: 20,
};

const buyCake = () => {
  // action creator function for buying cake which returns an object with proprtty type
  return {
    type: BUY_CAKE,
  };
};

const buyIcream = () => {
  // action creator function
  return {
    type: BUY_ICECREAM,
  };
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
  return state;
};

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIcecreams: state.noOfIcecreams - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: icecreamReducer,
  icecreams: cakeReducer,
});

const store = createStore(rootReducer,applyMiddleware(logger));
// console.log("Intial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(buyCake());


unsubscribe();
