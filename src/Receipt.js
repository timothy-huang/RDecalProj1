import React from "react";

class Receipt extends React.Component {
  renderItem(item) {
    return (
      <div className="receipt-item" key={item.name}>
        <div className="receipt-text">
          {item.productName} x {item.count + 1}
        </div>
        <div className="receipt-text">${item.price.toFixed(2)}</div>
      </div>
    );
  }

  calculateTotalCost() {
    const items = this.props.items;

    let totalCost = 0;
    for (let i = 0; i < items.length; i++) {
      totalCost += items[i].price * items[i].count;
    }

    return totalCost.toFixed(2);
  }

  render() {
    const items = this.props.items;
    return (
      <div className="receipt">
        <h2 className="receipt-text">Receipt</h2>
        {items.map(this.renderItem)}
        <div className="receipt-item">
          <div className="total">Total:</div>
          <div className="total">${this.calculateTotalCost()}</div>
        </div>
      </div>
    );
  }
}

export default Receipt;
