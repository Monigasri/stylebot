// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Chatbot from "./pages/Chatbot";
import Cart from "./pages/Cart";
import Collection from "./pages/collection"; // lowercase 'c'
import Login from "./pages/Login";
import { CartProvider } from "./contexts/UseCart"; // ✅

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
