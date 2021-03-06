import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />

        <Footer />
        </div>
      </HashRouter >
    );
  }
}

export default App;

// class="bg_image" style={{ backgroundImage: `url(${bg})`,
// backgroundSize: "cover",
// height: "100vh",
// backgroundAttachment: "fixed"}}