import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Faq from "./Faq";
import Gallery from "./Gallery";
import ContactUs from "./ContactUs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Footer";
import Suppliers from "./Suppliers";
import TermsandConditions from "./TermsandConditions";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Faq" component={Faq} />
          <Route path="/Gallery" component={Gallery} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Suppliers" component={Suppliers} />
          <Route path="/TermsandConditions" component={TermsandConditions} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
