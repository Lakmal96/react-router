import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Link to="/">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Service</Link>
      <Switch>
        <Route exact path="/" component={About} />
        {/* <Route exact path="/" render={About}/> Didn't work with useHistory */}
        <Route
          exact
          path="/contact"
          component={() => <Contact name="Contacts!" />}
        />
        <Route
          exact
          path="/services"
          component={() => <Services name="Services!!!" />}
        />
        <Route
          exact
          path="/contact/:namePara/:lnamePara"
          component={() => <Contact name="Contacts!" />}
        />
        <Route
          exact
          path="/services/:service"
          component={() => <Services name="Services!!!" />}
        />
      </Switch>
    </div>
  );
}

export default App;
