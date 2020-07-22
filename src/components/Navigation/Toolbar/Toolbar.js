import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggleBtn from "../SideDrawer/DrawerToggleButton/DrawerToggleBtn";

const toolbar = (props) => (
  <div className={classes.Toolbar}>
    <DrawerToggleBtn openSideDrawer={props.openSideDrawer}/>
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </div>
);

export default toolbar;
