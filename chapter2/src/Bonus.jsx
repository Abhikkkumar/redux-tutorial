import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncrementBonus } from "./actions";

export default function Bonus() {
  const amount = useSelector((state) => state.account.amount); // to get access of states in store we use 'useSelector' hook 
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch(); // to get access of 'dispatch' we use 'useDispatch' hook;
  
  return (
    <div className="card">
      <h3>Amount: ${amount} </h3>
      <h3>Bonus: {points} </h3>
      <button
        onClick={() => {
          dispatch(IncrementBonus());
        }}
      >
        increment
      </button>
    </div>
  );
}
