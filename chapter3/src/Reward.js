import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,incrementByAmount } from "./reducer/reward";


export default function Reward() {
  const points = useSelector((state) => state.bonus.points);
  const amount = useSelector((state) => state.account.amount);
  const rewards = useSelector((state)=>state.reward.points);
  const dispatch = useDispatch();
  return (
    <div className="account bonus">
      <h2> Reward Information</h2>
      <p>Amount: {amount}</p>
      <p>Bonus: {points}</p>
      <p>Reward: {rewards}</p>
      <button onClick={() => dispatch(increment())}>Increment Rewards(+)</button>
      <button onClick={() => dispatch(incrementByAmount(7))}>Increment Rewards by 7</button>
    </div>
  );
}
