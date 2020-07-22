import React from "react";
import classes from './BuildControls.module.css';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {Label : 'Salad' , Type: 'salad'},
    {Label : 'Bacon' , Type: 'bacon'},
    {Label : 'Cheese' , Type: 'cheese'},
    {Label : 'Meat' , Type: 'meat'},

]
const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>The Current price is: <strong>{props.price.toFixed(2)} $</strong></p>
        {controls.map(ctrl =>(
           <BuildControl 
           key={ctrl.Label} 
           Label={ctrl.Label}
           add={() => props.ingredientAdded(ctrl.Type)}
           remove={() => props.ingredientRemoved(ctrl.Type)}
           dissable={props.dissabled[ctrl.Type]}/> 
        ))}
        <button 
          className={classes.OrderButton} 
          disabled={!props.purchase}
          onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default BuildControls;
