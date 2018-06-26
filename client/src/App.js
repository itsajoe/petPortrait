import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Gallery from "./pages/gallery";
import NoMatch from "./pages/NoMatch";



const App = () => (
    <Router 
    basename={"/"}
    // forceRefresh={true}
  >
      <div>
        {/* <Home /> */}
        {/* <Gallery /> */}
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/gallery" render={() => <Gallery />} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
);

export default App;




