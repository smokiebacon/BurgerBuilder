import React, { Component } from 'react';
import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.65,
  meat: 1.3,
  bacon: 1
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice : 4,
  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    console.log('add')
    this.setState ({
      totalPrice : newPrice,
      ingredients: updatedIngredients
    })
  }
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }

    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    console.log('remove')
    this.setState ({
      totalPrice : newPrice,
      ingredients: updatedIngredients
    })
  }



    render () {
      const disableInfo = {
        ...this.state.ingredients
      }
      for (let key in disableInfo) {
        disableInfo[key] = disableInfo[key] <= 0
      }
        return (
            <Aux>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
                addIngredientHandler={this.addIngredientHandler}
                removeIngredientHandler={this.removeIngredientHandler}
                disabled={disableInfo}
                price={this.state.totalPrice}
             />
            </Aux>
        )
    }
}

export default BurgerBuilder;
