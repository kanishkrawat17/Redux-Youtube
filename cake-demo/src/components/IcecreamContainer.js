import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import { BUY_ICECREAM } from '../redux/cake/icecream/icecreamTypes';

export const IcecreamContainer = () => {


    let noOfIcecreams = useSelector((state )=> { 
        console.log(state); // we can get the state which is going to be an object here bcs we sent rootReducers in store in index.js
        // by combining both cakReducers and icecreamreducers using combined ({ cake : cakereducer , icecreams : icecreamreducer}) ,
        // so state will be an object which wil look like this {cakes: {…}, icecreams: {…}}
                                                                // cakes: {noOfCakes: 32}
                                                                // icecreams: {noOfIcecreams: 23} 
        return state.icecreams.noOfIcecreams;
    })

    console.log(noOfIcecreams);
    let dispatch = useDispatch();

   return <>
        <h2>Number of Ice Creams - {noOfIcecreams} </h2>
        <button onClick = {()=>{
            dispatch({
                type : BUY_ICECREAM,
            })
        }}> Buy IceCream</button>

    </>
}
