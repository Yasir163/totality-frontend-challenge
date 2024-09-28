import React from "react";
import { Link } from "react-router-dom";
import properties from "../properties";
import Card from "./Card";
import "../../src/App.css";
import "../components/Home.css";

function Home({
  cart,
  addToCart,
  removeFromCart,
  priceFilter,
  locationFilter,
  onPriceFilterChange,
  onLocationFilterChange,
}) {
  const filteredProperties = properties.filter((property) => {
    return (
      (priceFilter === "" || property.price <= priceFilter) &&
      (locationFilter === "" || property.location === locationFilter)
    );
  });

  return (
    <div className="home-container">
      <h2 className="title">Welcome to the Properties</h2>
      <div className="filter-section">
        <div className="filter">
          <label>Price Filter:</label>
          <input
            type="number"
            value={priceFilter}
            onChange={onPriceFilterChange}
            className="filter-input"
          />
        </div>

        <div className="filter">
          <label>Location Filter:</label>
          <select
            value={locationFilter}
            onChange={onLocationFilterChange}
            className="filter-select"
          >
            <option value="">All</option>
            <option value="Noida">Noida</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Delhi">Delhi</option>
          </select>
        </div>
      </div>

      <div className="property-cards">
        {filteredProperties.length > 0 ? (
          <div className="cards-container">
            {filteredProperties.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                imgUrl={item.imageUrl}
                onBuyNow={() => addToCart(item)}
                onRemoveFromCart={() => removeFromCart(item)}
                isInCart={cart.some((cartItem) => cartItem.id === item.id)}
              />
            ))}

            <h2>
              {cart.length > 0 ? (
                <div className="cart-info">
                  {`You have added ${cart.length} properties`}
                  <Link to="/cart">
                    <button className="cart-button">Let's go to Cart</button>
                  </Link>
                </div>
              ) : (
                <p className="to-hide"></p>
              )}
            </h2>
          </div>
        ) : (
          <p className="no-properties">
            We don't have anything matching your filter.
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
