import React from 'react';
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';


export const NewContainer = () => {

    let [ number, setNumber] = useState(1);
    const noOfCakes = useSelector(state => state.cakes.noOfCakes);
    const dispatch = useDispatch()

    return <>
        <h2>Number of cakes {noOfCakes}</h2>

        <input type = "text"  value = {number} 
        onChange = {(e)=>{
           e.target.value =  setNumber(e.target.value)
        }}></input>

        <button onClick = {()=>{
            dispatch({type : "BUY_CAKE", payload : number})
        }}> Buy {number} cakes</button>
    </>
}


// 13