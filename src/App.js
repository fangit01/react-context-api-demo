import React, { Component } from 'react';
import Cart from "./Components/Cart";
import { CartProvider } from './Contexts/CartContext';

import SingleProductPage from "./Components/SingleProductPage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <CartProvider >
        <Cart />
        <SingleProductPage />
      </CartProvider>
    </div>
    )
  }
}