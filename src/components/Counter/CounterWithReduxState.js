import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, divideBy2, increment, multiplyBy2} from "../actions";

function CounterWithReduxState(){
    const counter = useSelector(state=>state.counter);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <span>{counter}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(multiplyBy2())}>*2</button>
            <button onClick={()=>dispatch(divideBy2())}>/2</button>
        </div>
    )
}

export default CounterWithReduxState;