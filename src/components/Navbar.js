import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor: Navbar Component is being initialized.");
  }

  componentDidMount() {
    console.log("componentDidMount: Navbar Component has been rendered to the screen.");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: Navbar Component has been updated.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Navbar Component is about to be removed from the DOM.");
  }

  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
          <div className="container">
            <Link to="/" className="navbar-brand text-white font-weight-bold">
              EduLearn
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-white hover-effect">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link text-white hover-effect">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/courses" className="nav-link text-white hover-effect">
                    Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link text-white hover-effect">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/faq" className="nav-link text-white hover-effect">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
