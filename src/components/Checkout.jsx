import React from "react";
import "../components/Checkout.css";
function Checkout({ cart, total, formData }) {
  return (
    <div>
      {cart.length === 0 ? (
        <p className="cart-empty">You don't have anything in cart.</p>
      ) : (
        <div className="checkout-container">
          <h2 className="checkout-title">Checkout</h2>

          <div className="checkout-details">
            <h3 className="checkout-subtitle">Your Details</h3>
            <p className="checkout-detail-item">Name: {formData.name}</p>
            <p className="checkout-detail-item">Email: {formData.email}</p>
            <p className="checkout-detail-item">Address: {formData.address}</p>
            <p className="checkout-detail-item">Phone: {formData.phone}</p>
          </div>

          <div className="checkout-order">
            <h3 className="checkout-subtitle">Your Order</h3>
            {cart.map((item) => (
              <div key={item.id} className="checkout-item">
                <p className="checkout-item-title">{item.title}</p>
                <p className="checkout-item-price">Price: {item.price}</p>
              </div>
            ))}
          </div>

          <h3 className="checkout-total">Total Price: {total}</h3>

          <button className="checkout-btn">Confirm and Pay</button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
