import React from "react";
import { Link } from "react-router-dom";
import "../components/Cart.css";

function Cart({
  cartItem,
  cartLength,
  removeFromCart,
  calculateTotal,
  formData,
  handleInputChange,
  clearForm,
}) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    clearForm();
  };

  return (
    <div className="cart-container">
      {cartLength === 0 ? (
        <p className="cart-empty">No items are added to the cart.</p>
      ) : (
        <div className="cart-items-container">
          <ul className="cart-items-list">
            {cartItem.map((item) => (
              <li key={item.id} className="cart-item">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="cart-img"
                />
                <div className="cart-item-info">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <p className="cart-item-description">{item.description}</p>
                  <h4 className="cart-item-price">{item.price}</h4>
                </div>
                <button
                  className="remove-item-btn"
                  onClick={() => removeFromCart(item)}
                >
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-form-container">
            <h2>Enter Your Details</h2>
            <form className="cart-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label>Phone:</label>
                <input
                  type="number"
                  name="phone"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <button className="checkout-button">
                <Link to="/checkout">Proceed to Checkout</Link>
              </button>
            </form>
          </div>
          <div className="total-billing">Total Billing: {calculateTotal()}</div>
        </div>
      )}
    </div>
  );
}

export default Cart;
