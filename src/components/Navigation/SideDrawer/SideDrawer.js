import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import Aux from "../../../hoc/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) =>{
  let classesList = [classes.SideDrawer , classes.Close];
  if(props.open){
   classesList = [classes.SideDrawer , classes.Open];

  }
    return (
      <Aux>
        <Backdrop show={props.open} backdropClicked={props.closed}/>
        <div className={classesList.join(' ')}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <ul>
            <NavigationItems />
          </ul>
        </div>
      </Aux>
    );
  
}

export default sideDrawer;
