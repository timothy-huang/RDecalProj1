import React from "react";
import "./styles/cart.css";
import Product from "./Product";
import ProductData from "./Data";

class Cart extends React.Component {
  renderProducts() {
    return ProductData.products.map(product => (
      <Product
        productName={product.name}
        price={product.cost}
        limit={product.stock}
        key={product.name}
      />
    ));
  }

  render() {
    return (
      <div className="App">
        <div className="page-content">
          <div className="ui cards">{this.renderProducts()}</div>
        </div>
      </div>
    );
  }
}

export default Cart;
