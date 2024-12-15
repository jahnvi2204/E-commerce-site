import React from "react";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import "../styles/productCard.css"; // CSS file for styling

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button className="wishlist-btn">
          <FaHeart />
        </button>
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-rating">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              className={index < product.rating ? "filled-star" : "empty-star"}
            />
          ))}
        </div>
        <div className="product-price">
          <span className="current-price">${product.price}</span>
          {product.originalPrice && (
            <span className="original-price">${product.originalPrice}</span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="product-actions">
        <button className="add-to-cart-btn">
          <FaShoppingCart /> Add to Cart
        </button>
        <button className="buy-now-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
