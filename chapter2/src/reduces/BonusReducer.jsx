import { incBonus, incrementByAmount } from "../actions/index";

//reducer for bonus
export function bonusReducer(state = { points: 0 }, action) {
  // in bonusReducer we can only update bonus points not account details
  switch (action.type) {
    case incBonus:
      return { points: state.points + 1 };
    case incrementByAmount:
      if (action.payload >= 100) return { points: state.points + 1 };
    default:
      return state;
  }
}
