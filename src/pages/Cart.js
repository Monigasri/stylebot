// src/pages/Cart.js
import React from "react";
import { useCart } from "../contexts/UseCart";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">👗 Fashion AI</div>
        <ul className="nav-links">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/chatbot")}>Chatbot</li>
          <li onClick={() => navigate("/cart")}>Your Cart</li>
        </ul>
      </nav>

      <div className="collection-wrapper">
        <h2 className="collection-title">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p style={{ padding: "20px" }}>Your cart is empty.</p>
        ) : (
          <div className="collection-grid">
            {cartItems.map((item, index) => (
              <div key={index} className="collection-card">
                <img
                  src={item.image}
                  alt={item.name}
                  className="collection-image"
                />
                <div className="collection-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <button
                    className="collection-button"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
