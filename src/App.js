import React from "react";
import "./css/contact-form.css";
import "./css/grid.css";
import "./css/search.css";
import "./css/style.css";
import "./css/App.css";

import Home from "./pages/Home";
import Error from "./pages/Error";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
