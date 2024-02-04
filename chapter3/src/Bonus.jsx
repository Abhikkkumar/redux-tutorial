import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./slices/bonusSlice";

export default function Bonus() {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);
  const dispatch = useDispatch();
  return (
    <div className="account bonus">
      <h2> User Bonus Information</h2>
      <p>Amount: {amount}</p>
      <p>Bonus: {points}</p>
      <button onClick={() => dispatch(increment())}>Increment Bonus(+)</button>
    </div>
  );
}
