import { BUY_ICECREAM } from "./icecreamTypes"

const initialState = {
    noOfIcecreams :23
}

export const icecreamReducers = (state = initialState, action) => {
    console.log("icecreamReducers");
   switch(action.type){
       case BUY_ICECREAM : 
        return {
            ...state,
            noOfIcecreams : state.noOfIcecreams-1
        }
        default :
         return state;
   }
}
