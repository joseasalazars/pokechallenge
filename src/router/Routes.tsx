import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Pokemons from "../screens/Pokemons";
import Pokemon from "../screens/Pokemon";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Pokemons} />
        <Route exact path="/pokemon/:id" component={Pokemon} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
