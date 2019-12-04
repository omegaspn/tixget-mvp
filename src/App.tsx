import React, { lazy } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Loading } from "../src/components";
const Intro = lazy(() => import("./pages/Intro"));

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <React.Suspense fallback={<Loading />}>
          <Route exact path="/" component={Intro} />
        </React.Suspense>
      </HashRouter>
    </div>
  );
};

export default App;
