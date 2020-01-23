import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routers from "./config/routes";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Routers />
    </Router>
  );
}

export default App;
