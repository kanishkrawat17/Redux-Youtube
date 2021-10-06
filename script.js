const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

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
  // action creator function for buying cake which retur=rns an object with proprtty type
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

const store = createStore(rootReducer);
console.log("Intial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcream());
store.dispatch(buyIcream());

unsubscribe();
