import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const PRICE = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7,
};
class burgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice : 4,
    purchaseable : false,
    purchasing: false
  };

  updatePurchaseState = (updatedIngredients) =>{

    const sum = Object.keys(updatedIngredients) // [salad, bacon, cheese, meat]
                 .map(ingKey => {
                   return updatedIngredients[ingKey]   // [0, 0, 0, 0]
                 }).reduce((sum, element)=> {
                   return sum + element
                 } , 0)

          this.setState({purchaseable: sum>0})
  }
  addIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + PRICE[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice : newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  };
  removeIngredientsHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0){return;}
    const newCount = oldCount - 1;
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = newCount;

    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - PRICE[type];

    this.setState({
      ingredients: updatedIngredients,
      totalPrice : newPrice
    });
    this.updatePurchaseState(updatedIngredients);
  
  };
  orderNowClicked = () => {
   this.setState({purchasing : true})
  }
  backdropClicked = () => {
    this.setState({purchasing: false});
  }
  continueOrder = () => {
    alert("You continue!")
  }
  render() {
    const dissabledInfo = {...this.state.ingredients}
    for(let key in dissabledInfo){
      dissabledInfo[key] = dissabledInfo[key] <= 0
    }
    console.log(dissabledInfo)
    return (
      <Aux>
        <Modal show={this.state.purchasing} backdropClicked={this.backdropClicked}>
          <OrderSummary 
             orderedIngredients={this.state.ingredients}
             price={this.state.totalPrice} 
             cancleOrder={this.backdropClicked}
             continueOrder={this.continueOrder}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls 
              ingredientAdded={this.addIngredientsHandler} 
              ingredientRemoved={this.removeIngredientsHandler}
              dissabled={dissabledInfo}
              price={this.state.totalPrice}
              purchase={this.state.purchaseable}
              ordered={this.orderNowClicked}/>
      </Aux>
    );
  }
}

export default burgerBuilder;
