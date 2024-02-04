import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  points: 11,
};

const incrementByAmount = createAction("account/incrementByAmount");

export const bonusSlice = createSlice({
  name: "bonus",
  initialState,
  reducers: {
    increment: (state) => {
      state.points += 1; // Here it seems we are mutating our state but in reality react-redux using immer library to make a copy of state.
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAmount, (state, actions) => {
      if (actions.payload >= 100) {
        state.points++;
      }
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = bonusSlice.actions;

export default bonusSlice.reducer;
