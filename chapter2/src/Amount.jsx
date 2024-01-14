import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Increment,
  Decrement,
  IncrementByAmount,
  DecrementByAmount,
  getUserAccount,
} from "./actions";

export default function Amount() {
  const amount = useSelector((state) => state.account.amount); // to get access of states in store we use 'useSelector' hook
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch(); // to get access of 'dispatch' we use 'useDispatch' hook;

  const [valueEntered, setValueEntered] = useState(0);

  return (
    <div className="card">
      <h3>Current Amount: ${amount} </h3>
      <h3>Current Bonus: {points} </h3>
      <button
        onClick={() => {
          dispatch(Increment());
        }}
      >
        Increment (+)
      </button>
      <button
        onClick={() => {
          dispatch(Decrement());
        }}
      >
        Decrement (-)
      </button>
      <input
        type="number"
        placeholder="Enter amount "
        value={valueEntered}
        onChange={(e) => {
          setValueEntered(Number(e.target.value));
        }}
      />
      <button
        onClick={() => {
          dispatch(IncrementByAmount(valueEntered));
        }}
      >
        IncrementByAmount
      </button>
      <button
        onClick={() => {
          dispatch(DecrementByAmount(valueEntered));
        }}
      >
        DecrementByAmount
      </button>
      <button
        onClick={() => {
          dispatch(getUserAccount(1));
        }}
      >
        Init Account
      </button>
    </div>
  );
}
