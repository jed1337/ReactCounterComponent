import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../actions";

function CounterWithReduxState(){
    const counter = useSelector(state=>state.counter);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <span>{counter}</span>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}

export default CounterWithReduxState;