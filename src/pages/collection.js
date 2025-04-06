// src/pages/Collection.js
import React from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../contexts/UseCart"; // ✅ correct import

const Collection = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div className="collection-wrapper">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">👗 Fashion AI</div>
        <ul className="nav-links">
          <li onClick={() => navigate("/home")}>Home</li>
          <li onClick={() => navigate("/chatbot")}>Chatbot</li>
          <li onClick={() => navigate("/cart")}>Your Cart</li>
        </ul>
      </nav>

      <h2 className="collection-title">Explore Collection</h2>

      <div className="collection-grid">
        {/* Item 1 */}
        <div className="collection-card">
          <img
            src="recomment-1.jpeg"
            alt="Achkan Kurta Set"
            className="collection-image"
          />
          <div className="collection-info">
            <h3>Achkan Kurta Set</h3>
            <p>
              Opt for a regal silk kurta set with intricate zari embroidery in
              shades like maroon or royal blue for weddings...
            </p>
            <button
              className="collection-button"
              onClick={() =>
                addToCart({
                  name: "Achkan Kurta Set",
                  image: "recomment-1.jpeg",
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="collection-card">
          <img
            src="recomment-2.jpeg"
            alt="Kanjeevaram Silk Saree"
            className="collection-image"
          />
          <div className="collection-info">
            <h3>Kanjeevaram Silk Saree</h3>
            <p>
              Coordinate your Kanjeevaram silk saree with others by choosing
              complementary colors...
            </p>
            <button
              className="collection-button"
              onClick={() =>
                addToCart({
                  name: "Kanjeevaram Silk Saree",
                  image: "recomment-2.jpeg",
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Item 3 */}
        <div className="collection-card">
          <img
            src="recomment-3.jpeg"
            alt="Sharara Suit Set"
            className="collection-image"
          />
          <div className="collection-info">
            <h3>Sharara Suit Set</h3>
            <p>Pick a stylish sharara suit set with detailed gota patti or mirror work...</p>
            <button
              className="collection-button"
              onClick={() =>
                addToCart({
                  name: "Sharara Suit Set",
                  image: "recomment-3.jpeg",
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Item 4 */}
        <div className="collection-card">
          <img
            src="recomment-4.jpeg"
            alt="Lehenga Choli Set"
            className="collection-image"
          />
          <div className="collection-info">
            <h3>Lehenga Choli Set</h3>
            <p>
              Opt for a dreamy lehenga choli in soft net or silk with floral embroidery...
            </p>
            <button
              className="collection-button"
              onClick={() =>
                addToCart({
                  name: "Lehenga Choli Set",
                  image: "recomment-4.jpeg",
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Item 5 */}
        <div className="collection-card">
          <img
            src="recomment-5.jpeg"
            alt="High-Waisted Jeans"
            className="collection-image"
          />
          <div className="collection-info">
            <h3>High-Waisted Jeans</h3>
            <p>
              Go for a pair of high-waisted skinny or wide-leg jeans in classic blue or black...
            </p>
            <button
              className="collection-button"
              onClick={() =>
                addToCart({
                  name: "High-Waisted Jeans",
                  image: "recomment-5.jpeg",
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>

        {/* Item 6 */}
        <div className="collection-card">
          <img
            src="recomment-6.jpeg"
            alt="Embroidered Ethnic Tops"
            className="collection-image"
          />
          <div className="collection-info">
            <h3>Embroidered Ethnic Tops</h3>
            <p>
              Choose a beautifully embroidered ethnic top with mirror or thread work in earthy tones...
            </p>
            <button
              className="collection-button"
              onClick={() =>
                addToCart({
                  name: "Embroidered Ethnic Tops",
                  image: "recomment-6.jpeg",
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
