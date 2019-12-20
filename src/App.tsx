import React, { lazy } from "react";
import { HashRouter, Route } from "react-router-dom";
import { Loading } from "../src/components";
import "reset-css";
const Intro = lazy(() => import("./pages/Intro"));
const EventContent = lazy(() => import("./pages/EventContent"));
const TicketList = lazy(() => import("./pages/TicketList"));
const Chat = lazy(() => import("./pages/Chat"));

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <React.Suspense fallback={<Loading />}>
          <Route exact path="/" component={Intro} />
          <Route exact path="/event-content" component={EventContent} />
          <Route exact path="/ticket-list" component={TicketList} />
          <Route exact path="/chat" component={Chat} />
        </React.Suspense>
      </HashRouter>
    </div>
  );
};

export default App;
