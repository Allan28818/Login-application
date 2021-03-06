import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

const Routes = () => {
  return(
    <BrowserRouter>
    <Switch>
      <PrivateRoute exact path = "/" component = { Index } />
      <Route exact path = "/login" component = { Login } />
      <Route exact path = "/sign-up" component = { SignUp } />

      <Route component = { NotFound } />
    </Switch>
  </BrowserRouter>
  )
}

export default Routes;