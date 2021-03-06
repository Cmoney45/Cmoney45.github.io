import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Nav from "./components/v2/MyNav";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/v2/Footer";
import "./AppV2.css";
// import SpectralNav from "./components/v2/spectralNav";
import Nav from "./components/v2/MyNav";

class App extends Component {
  render() {
    return (
      <Router
        basename={process.env.PUBLIC_URL}
      >
        <div className="App">
          {/* <SpectralNav /> */}
          <Nav />
          {/* <Wrapper classPass="push">
            <div id="main-body"> */}
          <Switch id="main-body">
            <Route exact path="/" component={Home} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Home} />
          </Switch>
          {/* </div> */}
          {/* </Wrapper> */}
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
