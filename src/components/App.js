import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

// child components
import Header from "./Header";
import ProductList from "./ProductList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      siteName: "Shop to React",
      products: [
        {
          id: 1,
          image: `${process.env.PUBLIC_URL}/products/cologne.jpg`,
          desc: 'Unisex Cologne',
          value: 0
        },
        {
          id: 2,
          image: `${process.env.PUBLIC_URL}/products/iwatch.jpg`,
          desc: 'Apple iWatch',
          value: 0
        },
        {
          id: 3,
          image: `${process.env.PUBLIC_URL}/products/mug.jpg`,
          desc: 'Unique Mug',
          value: 0
        },
        {
          id: 4,
          image: `${process.env.PUBLIC_URL}/products/wallet.jpg`,
          desc: 'Mens Wallet',
          value: 0
        }
      ]
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

  render() {
    return (
      <div className="App">
        <Header siteName={this.state.siteName} totalItems={this.getTotalQuantity()} />
        <ProductList products={this.state.products} handleQuantityChange={this.handleQuantityChange} />
      </div>
    );
  }
}

export default App;
