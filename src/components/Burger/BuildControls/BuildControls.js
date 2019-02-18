import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad'},
  { label: 'Meat', type: 'meat'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Bacon', type: 'bacon'}
];

const BuildControls = (props) => (
  <div className = {classes.BuildControls}>
  <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>

   {controls.map(ctrl => (
     <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        addIngredientHandler={() => props.addIngredientHandler(ctrl.type)}
        removeIngredientHandler={() => props.removeIngredientHandler(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
   ))}
  <button>Order Now</button>
  </div>
)

export default BuildControls;
