
import React, { useState, useEffect, useCallback } from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [outfits, setOutfits] = useState([]);
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/collection");
  };

  const fetchOutfits = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=indian traditional clothing&per_page=6&client_id=xGrTi0lm2NET-iVpKL_k6qX8xWLW-R2ezmAd1PXFn7o`
      );
      const data = await response.json();
      setOutfits(data.results);
    } catch (error) {
      console.error("Error fetching outfits:", error);
    }
  }, []);

  useEffect(() => {
    fetchOutfits();
  }, [fetchOutfits]);

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">👗 Fashion AI</div>
        <ul className="nav-links">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/chatbot")}>Chatbot</li>
          <li onClick={() => navigate("/cart")}>Your Cart</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="hero-heading">
            Find your perfect <br /> outfit for You, with AI
          </h1>
          <p className="hero-subtext">
            Discover all kinds of wear personalized for you. From sarees
            to jeans, we match your taste with the latest styles.
          </p>

          <div className="hero-buttons">
            <button onClick={() => navigate("/chatbot")} className="btn primary">
              Try Chatbot →
            </button>
            <button className="btn secondary" onClick={handleExploreClick}>
              Explore Collection
            </button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="home-photo.jpeg"
            alt="Fashion Illustration"
            className="styled-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
