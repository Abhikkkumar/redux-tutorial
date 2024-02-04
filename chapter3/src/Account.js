import React, { useState } from "react";
import "./account.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  getUserAccount,
} from "./slices/accountSlice";

export default function Account() {
  const [input, setInput] = useState(0);
  const amount = useSelector((state) => state.account.amount);
  const points = useSelector((state) => state.bonus.points);
  const dispatch = useDispatch();
  return (
    <div className="account">
      <h2> User Account Information</h2>
      <p>Amount: {amount}</p>
      <p>Bonus: {points}</p>
      <button onClick={() => dispatch(increment())}>Increment(+)</button>
      <button onClick={() => dispatch(decrement())}>Decrement(-)</button>
      <input
        type="number"
        name="value"
        placeholder="enter amount"
        value={input}
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
      />
      <button onClick={() => dispatch(incrementByAmount(input))}>
        Increment By {input}
      </button>
      <button onClick={() => dispatch(getUserAccount(2))}>
        GetUserAccount
      </button>
    </div>
  );
}
