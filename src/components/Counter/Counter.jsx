import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrement,
  counterIncrement,
  counterReset,
} from "../../Redux/CounterAction/CounterAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(counterIncrement());
  };
  const handleDecrement = () => {
    dispatch(counterDecrement());
  };
  const handleReset = () => {
    dispatch(counterReset());
  };
  return (
    <div>
      <h3>
        Count : <span className="count">{count}</span>
      </h3>
      <button
        onClick={handleDecrement}
        disabled={count === 0}
        className="btn-decrement"
      >
        Decrement
      </button>
      <button
        onClick={handleReset}
        disabled={count === 0}
        className="btn-reset"
      >
        Reset
      </button>
      <button onClick={handleIncrement} className="btn-increment">
        Increment
      </button>
    </div>
  );
};

export default Counter;
