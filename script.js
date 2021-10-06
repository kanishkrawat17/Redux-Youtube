const redux = require('redux');
const createStore = redux.createStore;


const intialState = {  //initial state of icecreams
    noOfIcecreams : 20,
    noOfCakes : 50
}

const BUY_ICEREAM= 'BUY_ICEREAM'; // action-name
const BUY_CAKE = 'BUY_CAKE'; // action-name

const buyIcream = ()=>{  // action creator function 
        return {
            type : BUY_ICEREAM
        }
}

const buyCake=()=>{
    return {
        type : BUY_CAKE,
    }
}

const reducer = (state = intialState, action)=>{ //icecream reducer fn -> takes in previous state and action as arguments
    switch(action.type){
        case BUY_ICEREAM : return{
            ...state,
            noOfIcecreams : state.noOfIcecreams-1,
        }
        case BUY_CAKE :  return {
            ...state,
            noOfCakes : state.noOfCakes-1
        }
        default : return state
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState());
const unsubscribe =  store.subscribe(()=>{
     console.log('Updated state',store.getState());
})
store.dispatch(buyIcream())
store.dispatch(buyIcream())
store.dispatch(buyCake())
store.dispatch(buyIcream())
// console.log()

