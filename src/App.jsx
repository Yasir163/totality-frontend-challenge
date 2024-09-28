import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [priceFilter, setPriceFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");

  const handlePriceFilterChange = (e) => setPriceFilter(e.target.value);
  const handleLocationFilterChange = (e) => setLocationFilter(e.target.value);

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  const cartLength = cart.length;

  function addToCart(property) {
    console.log("Adding to cart", property);
    setCart((prevCart) => [...prevCart, property]);
  }

  function removeFromCart(item) {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.id !== item.id)
    );
  }

  function calculateTotal() {
    return cart.reduce((acc, item) => acc + item.price, 0);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>
        <div className="app-body">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cart={cart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                priceFilter={priceFilter}
                locationFilter={locationFilter}
                onPriceFilterChange={handlePriceFilterChange}
                onLocationFilterChange={handleLocationFilterChange}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cart}
                cartLength={cartLength}
                removeFromCart={removeFromCart}
                calculateTotal={calculateTotal}
                formData={formData}z
                handleInputChange={handleInputChange}
                clearForm={clearForm}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                total={calculateTotal()}
                formData={formData}
                cartLength={cartLength}
              />
            }
          />
        </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
