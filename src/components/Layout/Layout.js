import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerCloseHandeller = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerOpenHandeller = () => {
    this.setState((prevState) => {
      return {
        showSideDrawer: !prevState.showSideDrawer,
      };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar openSideDrawer={this.sideDrawerOpenHandeller} />
        <SideDrawer
          closed={this.sideDrawerCloseHandeller}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
