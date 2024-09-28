import React from "react";
import "../../src/App.css";
import "../components/Card.css"
function Card({ title, description, price, imgUrl, onBuyNow, isInCart, onRemoveFromCart }) {
  function handleBooking() {
    if (isInCart) {
      onRemoveFromCart();
    } else {
      onBuyNow();
    }
  }
  
  return (
    <div className="card">
      <img src={imgUrl} alt={title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <h4 className="card-price">Price : <span>{price}Rs</span></h4>
        <button onClick={handleBooking} className="buy-now-btn">
          {isInCart ? "In Cart" : "Book Now"}
        </button>
      </div>
    </div>
  );
}

export default Card;

