import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsync } from "./productsSlice";
import { addAsync } from "../cart/cartSlice";
import "./Products.css";

export function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(fetchAsync());
  });
  return (
    <div>
      <div>
        {products.map((oneProduct) => {
          return (
            <div className="card" key={oneProduct.id}>
              <img
                src={oneProduct.thumbnail}
                alt="Denim Jeans"
                style={{ width: "100%" }}
              />
              <h1>{oneProduct.title}</h1>
              <p className="price">${oneProduct.price}</p>
              <p>{oneProduct.description}</p>
              <p>
                <button
                  onClick={() => {
                    dispatch(addAsync(oneProduct));
                  }}
                >
                  Add to Cart
                </button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
