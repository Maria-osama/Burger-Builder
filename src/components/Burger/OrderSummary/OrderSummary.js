import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentWillUpdate(){
    console.log('[OrderSummary] will update')
  }
  render() {
    const ingredients = Object.keys(this.props.orderedIngredients).map(
      (ingKey) => {
        return (
          <li key={ingKey}>
            <span style={{ textTransform: "capitalize" }}>{ingKey}</span>:{" "}
            {this.props.orderedIngredients[ingKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredients}</ul>
        <p>
          <strong>Total price: {this.props.price.toFixed(2)} $</strong>
        </p>
        <p>Continue to checkout?</p>

        <Button clicked={this.props.cancleOrder} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.continueOrder} btnType="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
