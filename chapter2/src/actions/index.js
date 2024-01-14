import axios from 'axios';
//action types
export const increment = "account/increment";
export const decrement = "account/decrement";
export const incrementByAmount = "account/incrementByAmount";
export const decrementByAmount = "account/decrementByAmount";
// export const init = "account/init";
export const incBonus = "bonus/increment";
export const getAccUserPending = "account/getUser/pending";
export const getAccUserFulfilled = "account/getUser/fulfilled";
export const getAccUserRejected = "account/getUser/rejected";



//-------- action creators

export function getUserAccount(id) {
    return async (dispatch, getState) => {
      try{
        dispatch(getAccountUserPending());
        const { data } = await axios.get(`http://localhost:10000/accounts/${id}`);
        dispatch(getAccountUserFulfilled(data.amount));
      }catch(err){
        dispatch(getAccountUserRejected(err.message));
      }
      
    };
  }
  
  //sync action creator
  export function getAccountUserFulfilled(value) {
    return { type: getAccUserFulfilled, payload: value };
  }
  export function getAccountUserPending() {
    return { type: getAccUserPending };
  }
  export function getAccountUserRejected(error) {
    return { type: getAccUserRejected, error: error };
  }
  
  export function Increment() {
    return { type: increment };
  }
  
  export function Decrement() {
    return { type: decrement };
  }
  
  export function IncrementByAmount(value) {
    return { type: incrementByAmount, payload: value };
  }
  export function DecrementByAmount(value) {
    return { type: decrementByAmount, payload: value };
  }
  
  export function IncrementBonus(){
    return ({type:incBonus}); // will only update bonus points;
  }