import { createAction, createReducer } from "@reduxjs/toolkit";

// creating our own action
export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount");

const initialState = {
  points: 20,
};


//creating our own custom reducer
const rewardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.points++;
    })
    .addCase(incrementByAmount, (state, action) => {
      state.points += action.payload;
    });
});
export default rewardReducer;
