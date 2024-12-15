import React, { useState } from "react";
import '../styles/cart.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import ShippingPage from './ShippingPage';  // Import ShippingPage component
import AddressCard from './AddressCard';    // Import AddressCard component

const ShoppingCart = () => {
  const [products] = useState([
    { id: 1, name: "Apple", price: 1.5 },
    { id: 2, name: "Banana", price: 0.8 },
    { id: 3, name: "Orange", price: 1.2 },
  ]);

  const [cart, setCart] = useState([]);
  const [isShippingPage, setIsShippingPage] = useState(false);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Update product quantity
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <Navbar />
      <div className="cartDiv" style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <h1 className="cartHeading">Shopping Cart</h1>

        {/* Product List */}
        <h2 className="cartHeading">Products</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {products.map((product) => (
            <li className="CartLi" key={product.id} style={{ marginBottom: "10px" }}>
              {product.name} - ${product.price.toFixed(2)}
              <button onClick={() => addToCart(product)} style={{ marginLeft: "10px" }}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>

        {/* Cart */}
        <h2 className="cartHeading">Your Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              {cart.map((item) => (
                <li className="CartLi" key={item.id} style={{ marginBottom: "10px" }}>
                  {item.name} - ${item.price.toFixed(2)} x{" "}
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                    style={{ width: "50px", textAlign: "center" }}
                  />
                  <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: "10px" }}>
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <h3 className="cartHeading">Subtotal: ${calculateSubtotal().toFixed(2)}</h3>
            <button onClick={clearCart} style={{ marginTop: "10px" }}>
              Clear Cart
            </button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}

        {/* Shipping and Address Section */}
        <h2 className="cartHeading" style={{ marginTop: "20px" }}>Shipping Information</h2>
        <button onClick={() => setIsShippingPage(true)} style={{ marginBottom: "10px" }}>
          Proceed to Shipping
        </button>
        
        {isShippingPage ? (
          <>
            <ShippingPage />
            <AddressCard />
          </>
        ) : null}
        
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
