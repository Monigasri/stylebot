import React from "react";
import "../styles/styles.css"; // Import the CSS file

const FashionCard = () => {
  return (
    <div className="card">
      <h2 className="card-title">Outfil & Jewellery</h2>

      <div className="content">
        {/* Image Placeholder */}
        <div className="image-placeholder"></div>

        {/* Text Content */}
        <div className="details">
          <h3 className="product-title">Kurta Set</h3>
          <p className="description">
            Kurta set in soft pastel shades like mint green or blush pink exudes elegance 
            and grace, paired with subtle embroidery for a refined look. Complete the ensemble 
            with statement jhumkas and a delicate bracelet to elevate the traditional charm.
          </p>

          <p className="product-label">Product</p>

          {/* View Product Button */}
          <button className="view-btn">
            View Product <span className="arrow">➤</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FashionCard;
