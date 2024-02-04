import axios from "axios";
import { createStore, applyMiddleware, combineReducers } from "redux"; // applyMiddleware is used to use middleware in redux
import logger from "redux-logger"; // redux-logger is a middleware. gives a log of all the states
import { thunk } from "redux-thunk"; // a middleware to do api call by stopping actions by dispatch and then continuing the action

//make the name of actions, constant
const increment = "account/increment";
const decrement = "account/decrement";
const incrementByAmount = "account/incrementByAmount";
// const init = "account/init";
const incBonus = "bonus/increment";
const getAccUserPending = "account/getUser/pending";
const getAccUserFulfilled = "account/getUser/fulfilled";
const getAccUserRejected = "account/getUser/rejected";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default, thunk)
); // creating a store in redux.
// 1.state must be global, so that global state must be accessible everywhere. we can access it using .getState() method

// const history = [];

//reducer for account
function accountReducer(state = { amount: 1 }, action) {
  //2. States are IMMUTABLE
  switch (action.type) {
    case getAccUserFulfilled:
      return { amount: action.payload, pending:false };
    case getAccUserRejected:
      return {...state,error:action.error, pending:false};
    case getAccUserPending:
      return {...state,pending:true};
    case increment:
      return { amount: state.amount + 1 }; // we won't change old state, but create a new state.
    case decrement:
      return { amount: state.amount - 1 };
    case incrementByAmount:
      return { amount: state.amount + action.payload };
    default:
      return state;
  }
}

//reducer for bonus
function bonusReducer(state = { points: 0 }, action) {
  // in bonusReducer we can only update bonus points not account details
  switch (action.type) {
    case incBonus:
      return {points:state.points+1};
    case incrementByAmount:
      if(action.payload>=100)
        return { points: state.points+1 };
    default:
      return state;
  }
}

// //------- .subscribe() method runs everytime state changes
// store.subscribe(()=>{
//     history.push(store.getState()) // add current state into array containing all previous state
//     console.log(history);
// })

// getting user 1 data from db.json
// async function gettingUser(){
//     const {data} = await axios.get("http://localhost:3000/account/1");
//     console.log(data);
// }
// gettingUser();

//Action creation

//---------------
// function initUser(){
//     //when this function is run, then it will give error as
//     // 'action' are meant to return plane JS object not 'promises'
//     // which it does in this case
//     const {data} = await axios.get("http://localhost:3000/account/1");
//     return {type:init, payload:data.amount}
// }
//-----------

// // async action function
// async function getUser(dispatch, getState){ // thunk give access of store 'dispatch' and 'getState' to the async function
//     const {data} = await axios.get("http://localhost:3000/account/1");
//     dispatch(userInit(data.amount));
// }

//async action creator function in which userId can be passed as argument
function getUserAccount(id) {
  return async (dispatch, getState) => {
    try{
      dispatch(getAccountUserPending());
      const { data } = await axios.get(`http://localhost:3000/account/${id}`);
      dispatch(getAccountUserFulfilled(data.amount));
    }catch(err){
      dispatch(getAccountUserRejected(err.message));
    }
    
  };
}

//sync action creator
function getAccountUserFulfilled(value) {
  return { type: getAccUserFulfilled, payload: value };
}
function getAccountUserPending() {
  return { type: getAccUserPending };
}
function getAccountUserRejected(error) {
  return { type: getAccUserRejected, error: error };
}

function Increment() {
  return { type: increment };
}

function Decrement() {
  return { type: decrement };
}

function IncrementByAmount(value) {
  return { type: incrementByAmount, payload: value };
}

function IncrementBonus(){
  return ({type:incBonus}); // will only update bonus points;
}

// setInterval(() => {
//   // dispatch sends an event/action { here 'increment' is an event} to the reducer.
//   store.dispatch(Increment()); // calls action in every 2 sec.
// }, 2000);

//---------------- npm i -g json-server : to install a fake json server
// ------------ to run the json server : json-server 'name-of-json-file with path'

//------- using thunk to send an async "action" to "reducer"

// store.dispatch(getUser); // we don't call the "async action" function, just give reference about the
// function unlike sync action function which is called in dispatch.

store.dispatch(getUserAccount(2));
// store.dispatch(IncrementByAmount(20));
// store.dispatch(IncrementBonus());
