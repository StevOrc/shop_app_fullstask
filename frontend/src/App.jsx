import React, { useState } from "react";
import { NavBar, Backdrop, SideDrawer } from "./components";
import {
  CartScreen,
  HomeScreen,
  ProductScreen,
  CheckoutScreen,
} from "./screens";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  // State to handle the side bar menu in responsive screen
  const [sideToogle, setSideToogle] = useState(false);

  const onCloseSideBar = () => {
    setSideToogle(false);
  };

  const onOpenSideBar = () => {
    setSideToogle(false);
  };

  return (
    <Router>
      <NavBar onClickBurger={onOpenSideBar} />
      <SideDrawer show={sideToogle} click={onCloseSideBar} />
      <Backdrop show={sideToogle} click={onCloseSideBar} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/checkout" component={CheckoutScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
