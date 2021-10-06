const redux = require('redux');
const createStore = redux.createStore;


const initialIcecreamCount = {  //initial state of icecreams
    noOfIcecreams : 20
}

const BUY_ICREAM= 'BUY_ICREAM'; // action-name

const buyIcream = ()=>{  // action creator function 
        return {
            type : BUY_ICREAM
        }
}

const icecreamReducer = (state = initialIcecreamCount, action)=>{ //icecream reducer fn -> takes in previous state and action as arguments
    switch(action.type){
        case BUY_ICREAM : return{
            ...state,
            noOfIcecreams : state.noOfIcecreams-1,
        }
        default : return state
    }
}

const store = createStore(icecreamReducer);
console.log('Initial state', store.getState());
const unsubscribe =  store.subscribe(()=>{
     console.log('Updated state',store.getState());
})
store.dispatch(buyIcream())
store.dispatch(buyIcream())
store.dispatch(buyIcream())
// console.log()

