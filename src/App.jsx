import "./style.css";
import Home from "./pages/Home";
import React, { useState } from "react";
import Request from "./pages/Request";

export default function App() {
  const [showCart, setShowCart] = useState(false);
  const [showRequest, setShowRequest] = useState(false);
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    if (!cart.some(x => x.id === item.id)) setCart([...cart, item]);
  };
  const removeFromCart = id => setCart(cart.filter(x => x.id !== id));

  return (
    <div className="app-bg">
      {/* Top header buttons, show only if not Request page */}
      {!showRequest && (
        <div className="header-buttons">
          <button
            className="left-btn"
            onClick={() => { setShowCart(c => !c); setShowRequest(false); }}
          >
            {showCart ? "Show Shopping Items" : "Show Cart Items"}
          </button>
          <button
            className="right-btn"
            onClick={() => setShowRequest(true)}
          >
            Request Page
          </button>
        </div>
      )}
      {/* Display content */}
      <div className="center-content">
        {showRequest ? (
          <Request goBack={() => setShowRequest(false)} />
        ) : (
          <Home
            showCart={showCart}
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </div>
  );
}
