import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import axios from "axios";

// different types of actions
const resultPending = "post/result-pending";
const resultSuccess = "post/result-success";
const resultFailure = "post/result-failure";

// store
const store = createStore(reducer, applyMiddleware(logger.default, thunk));

// reducer
function reducer(state = { message: "no posts" }, action) {
  switch (action.type) {
    case resultPending:
      return { message: "loading posts...", pending: true };
    case resultSuccess:
      return { message: "posts loaded", pending: false, posts: action.payload };
    case resultFailure:
      return {
        message: "post fetching failed",
        pending: false,
        error: action.error,
      };
    default:
      return state;
  }
}

//action creators

//async action creator
function loadPosts() {
  return async (dispatch, getState) => {
    try {
      dispatch(postsPending());
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/5"
      );

      dispatch(postsSuccess(data));
    } catch (error) {
      dispatch(postsFailure(error.message));
    }
  };
}
//sync action creator
function postsPending() {
  return { type: resultPending };
}
function postsSuccess(data) {
  return { type: resultSuccess, payload: data };
}
function postsFailure(error) {
  return { type: resultFailure, error: error };
}

store.dispatch(loadPosts());    // sending action to reducer through dispatch
