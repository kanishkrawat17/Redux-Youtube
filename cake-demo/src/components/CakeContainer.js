import React from "react";
// import { connect, useSelector } from "react-redux";
import { useSelector ,useDispatch} from "react-redux";


export const CakeContainer = () => {
    let noOfCakes = useSelector(state => state.cakes.noOfCakes);
    let dispatch  = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {noOfCakes}</h2>
      <button onClick={() => 
        dispatch({ type: 'BUY_CAKE' })
    }> Buy cake</button>
    </div>
  );
};

// export default connect(mapDispatchToprops, mapStateToProps)(CakeContainer);
// connect helps in connecting the store to CakeContainer component
//components can access the state and dispatch an action using mapStateToProps,mapDispatchToprops.

// react hooks api gives us redux hooks to an alternative of existing higher order component ->  so api allows us subscribe to redux store and
//  also dispatch action without wraaping them in connect()

//useSelector() -> to get hold of state present in redux store we use thuis hooks , we call it within the component, this takes in a function
// as its parameter , this function gets redux-state as its argument
