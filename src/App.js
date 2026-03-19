import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

// components
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";
import Cart from "./cart";
import Checkout from "./Checkout";
import SignIn from "./SignIn";
import products from "./products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "Shop to React",
      products: products,
      isLoggedIn: false,
      user: null
    };
  }

  handleQuantityChange = (id, newValue) => {
    const updatedProducts = this.state.products.map(product =>
      product.id === id ? { ...product, value: newValue } : product
    );
    this.setState({ products: updatedProducts });
  }

  getTotalQuantity = () => {
    return this.state.products
      .map(product => product.value)
      .reduce((total, current) => total + current, 0);
  }

  handleLogin = (response) => {
    if (response.accessToken) {
      this.setState({ isLoggedIn: true, user: response });
    }
  }

  handleLogout = () => {
    this.setState({ isLoggedIn: false, user: null });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar 
            siteName={this.state.siteName} 
            totalItems={this.getTotalQuantity()} 
            isLoggedIn={this.state.isLoggedIn} 
            user={this.state.user} 
            onLogout={this.handleLogout}
            onLogin={this.handleLogin}
          />
          <Routes>
            <Route 
              path="/" 
              element={<DisplayProducts products={this.state.products} handleQuantityChange={this.handleQuantityChange} />} 
            />
            <Route 
              path="/cart" 
              element={<Cart 
                products={this.state.products} 
                isLoggedIn={this.state.isLoggedIn} 
              />} 
            />
            <Route 
              path="/signin" 
              element={<SignIn onLogin={this.handleLogin} />} 
            />
            <Route 
              path="/checkout" 
              element={<Checkout />} 
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
