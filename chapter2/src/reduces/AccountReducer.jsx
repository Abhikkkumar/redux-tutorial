import {
  getAccUserFulfilled,
  getAccUserRejected,
  getAccUserPending,
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} from "../actions/index";
//reducer for account
export function accountReducer(state = { amount: 1 }, action) {
  //2. States are IMMUTABLE
  switch (action.type) {
    case getAccUserFulfilled:
      return { amount: action.payload, pending: false };
    case getAccUserRejected:
      return { ...state, error: action.error, pending: false };
    case getAccUserPending:
      return { ...state, pending: true };
    case increment:
      return { amount: state.amount + 1 }; // we won't change old state, but create a new state.
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    case decrementByAmount:
      let a = state.amount - action.payload;
      if(a>=0)
        return { amount:a };
      else
        return {...state, error:"Insufficient Balance!"}
    default:
      return state;
  }
}
