import { BUY_CAKE } from "./cakeTypes";

let intialState = {
    noOfCakes : 32,
}

export const cakeReducers = (state = intialState, action) => {
    console.log("redcers");
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      };
    default:
      return state;
  }
};
