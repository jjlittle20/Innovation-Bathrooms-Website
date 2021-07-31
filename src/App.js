import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Faq from "./Faq";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Faq" component={Faq} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
