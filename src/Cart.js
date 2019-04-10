import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";
import Receipt from "./Receipt";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: []
    };
  }

  handleAddToCart(name, cost) {
    let newCartItems = [...this.state.cartItems];
    let newCartItemsLength = newCartItems.length;
    let productIndex = null;
    let inList = false;

    for (let i = 0; i < newCartItemsLength; i++) {
      if (newCartItems[i].productName == name) {
        inList = true;
        productIndex = i;
      }
    }

    if (inList) {
      newCartItems[productIndex].count += 1;
    } else {
      newCartItems = [
        ...this.state.cartItems,
        {
          productName: name,
          price: cost,
          count: 0
        }
      ];
    }

    this.setState({
      cartItems: newCartItems
    });
  }

  handleDeleteFromCart(name) {
    let newCartItems = [...this.state.cartItems];
    let newCartItemsLength = newCartItems.length;
    let countGreaterThanZero = false;

    for (let i = 0; i < newCartItemsLength; i++) {
      if (newCartItems[i].productName == name) {
        if (newCartItems[i].count > 0) {
          countGreaterThanZero = true;
          newCartItems[i].count -= 1;
        }
      }
    }

    if (!countGreaterThanZero) {
      newCartItems = newCartItems.filter(item => item.productName != name);
    }

    this.setState({
      cartItems: newCartItems
    });
  }

  renderProducts() {
    return ProductData.products.map(product => (
      // <Product
      //   productName={product.name}
      //   price={product.cost}
      //   limit={product.stock}
      //   key={product.name}
      // />
      <Product
        productName={product.name}
        price={product.cost}
        key={product.name}
        onAddToCart={this.handleAddToCart.bind(this)}
        onDeleteFromCart={this.handleDeleteFromCart.bind(this)}
      />
    ));
  }

  render() {
    return (
      <div className="App">
        <div className="page-content">
          <div className="ui cards">{this.renderProducts()}</div>
          <Receipt items={this.state.cartItems} />
        </div>
      </div>
    );
  }
}

export default Cart;
