import "./counter.css"
import React from 'react';
import { increment, decrement, Reset } from '../features/counter/counterSlice';
import { useSelector, useDispatch } from 'react-redux';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <h1>Counter: {count}</h1>
      <div className="buttonsgroup">
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button></div>
    </div>
  );
}

export default Counter;
