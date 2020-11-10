import React from "react";
import axios from 'axios';
import Products from "./components/Products";
import Cart from "./components/Cart";

const api = axios.create({
  baseURL: 'http://healthsafe.test/api/v1/products'
})

class App extends React.Component {
  constructor() {
    super();
    api.get('/').then(res => {
      this.setState({ products: res.data.data })
    })
    this.state = {
      products: [],
      cartItems: [],
    };
  }

  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter(x => x.id !== product.id),
    });
  };

  addToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let inCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        inCart = true;
      }
    });
    if (!inCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">HealthSafe Shopping Mart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              {this.state.products.length} Products
            <Products
                products={this.state.products}
                addToCart={this.addToCart}
              ></Products>
            </div>
            <div className="sidebar">
              <Cart
                cartItems={this.state.cartItems}
                removeFromCart={this.removeFromCart}
              />
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default App;
