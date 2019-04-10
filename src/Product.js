import React from "react";
import styles from "./styles/styles.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    if (this.props.limit == 0) {
      alert("This item is out of stock!");
    } else {
      this.setState({
        counter: this.state.counter + 1
      });

      let display = (this.state.counter += 1);

      if (this.state.counter > this.props.limit) {
        alert(
          "There are too many " + this.props.productName + " in your cart!"
        );
        return;
      } else {
        alert(
          "There are " +
            display +
            " " +
            this.props.productName +
            " in your cart!"
        );
      }
    }
  }

  render() {
    const { productName, price, limit } = this.props;

    return (
      <div className="card">
        <div className="content">
          <div className="header">{productName}</div>
          <div className="description">Price: ${price}</div>
        </div>
        <div
          className="ui bottom attached button"
          onClick={() => this.addToCart()}
        >
          <i className="add icon" />
          Add to Cart
        </div>
      </div>
    );
  }
}

export default Product;
