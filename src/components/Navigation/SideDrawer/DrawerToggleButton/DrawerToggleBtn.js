import React from "react";

import classes from "./DrawerToggleBtn.module.css";

const drawerToggleBtn = (props) => {
  return (
    <div className={classes.DrawerToggle} onClick={props.openSideDrawer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default drawerToggleBtn;
