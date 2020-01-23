import React, { Suspense, lazy } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

const Home = lazy(() => import("../../Feture/pages/Home"));
function Routes() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(Routes);
