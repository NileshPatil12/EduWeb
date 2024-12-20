import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Courses />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    );
  }
}

export default App;
