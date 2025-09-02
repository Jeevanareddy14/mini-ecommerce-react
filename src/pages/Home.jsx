import React, { useState } from "react";
import itemsData from "../api/items.json";

export default function Home({ showCart, cart, addToCart, removeFromCart }) {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{showCart ? "Cart Items" : "Shopping Items"}</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {showCart
          ? cart.map(item => (
              <div key={item.id} className="item-card">
                <h3>{item.title}</h3>
               <p>Price : {item.price}</p>           {/*  TO display cart items in div tag */}
                <button onClick={() => removeFromCart(item.id)}>
                  Remove From Cart
                </button>
              </div>
            ))
          : itemsData.map(item => (
              <div key={item.id} className="item-card">
                <h3>{item.title}</h3>
                <p>Price : {item.price}</p>                   {/*  TO display shopping items in div tag */}
                <button onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))}
      </div>
    </div>
  );
}
