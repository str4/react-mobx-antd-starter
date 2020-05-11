import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./views/home/Home";
import Settings from "./views/settings/Settings";

const makeMainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  );
};

export default makeMainRoutes;
