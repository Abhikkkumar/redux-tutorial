import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAsync, updateAsync } from "./cartSlice";
import "./Cart.css";
import { current } from "@reduxjs/toolkit";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  function handleChange(e, id) {
    // console.log(e.target.value);
    dispatch(updateAsync({ id, change: { quantity: +e.target.value } }));
  }
  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div className="cart-item">
              <img src={item.thumbnail} alt="" className="img-fluid" />
              <div className="description">
                <p>{item.title}</p>
                <span>{item.brand}</span>
                <strong>${item.price}</strong>
              </div>
              <div className="quantity">
                <div>
                  Quantity
                  <select
                    value={item.quantity}
                    onChange={(e) => {
                      handleChange(e, item.id);
                    }}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
                <div className="close">
                  <button
                    onClick={() => {
                      dispatch(deleteAsync(item.id));
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h1>
        Total: $
        {items.reduce(
          (accumulator, item) => item.price * item.quantity + accumulator,
          0
        )}
      </h1>
    </div>
  );
}
