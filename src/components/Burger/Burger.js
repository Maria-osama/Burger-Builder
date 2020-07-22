import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(ingKey =>{ //Object.keys: transfers object to array of objects'keys
      return [...Array(props.ingredients[ingKey])].map((x,i) =>{
          return <BurgerIngredient key={ingKey + i} type={ingKey}/>
      })
  }).reduce((newArr , prevArr)=>{
      return newArr.concat(prevArr);
  } , [])

  if(transformedIngredients.length === 0)
  transformedIngredients = <p>Please start adding ingredients</p>

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
       {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
