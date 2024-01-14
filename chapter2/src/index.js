import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { Provider } from "react-redux";

import { accountReducer } from "./reduces/AccountReducer";
import { bonusReducer } from "./reduces/BonusReducer";

// we are creating store at index as it puts the store at the top of every other elements
const store = createStore(
  combineReducers({
    account: accountReducer, //we are importing reducers
    bonus: bonusReducer,
  }),
  applyMiddleware(logger, thunk) 
); // creating a store in redux.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* to make our store available to every elements, we wrap other elements between "Provider" tag */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
