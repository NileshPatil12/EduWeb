import React, { Component } from "react";

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
        <nav className="navbar navbar-light bg-light">
          <span className="navbar-brand">EduLearn</span>
          <ul className="nav">
            <li className="nav-item">
              <button className="btn btn-link">
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link">
                About
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link">
                Courses
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link">
                Contact
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-link">
                FAQ
              </button>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
