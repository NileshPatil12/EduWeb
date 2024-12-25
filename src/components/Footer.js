import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor: Footer Component is being initialized.");
  }

  componentDidMount() {
    console.log("componentDidMount: Footer Component has been rendered to the screen.");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: Footer Component has been updated.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Footer Component is about to be removed from the DOM.");
  }

  handleLinkClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  render() {
    return (
      <footer
        className="py-5"
        style={{
          backgroundColor: "#1c1c1c", // Darker, clean background
          color: "#eaeaea", // Softer text color for readability
        }}
      >
        <div className="container">
          {/* Logo and Brief Section */}
          <div className="row mb-4">
            <div className="col-lg-4 col-md-6 mb-4">
              <h4 className="fw-bold text-light">EduLearn</h4>
              <p>
                Empowering learners worldwide with high-quality, accessible
                education. Grow academically and professionally with us.
              </p>
            </div>

            {/* Links Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <h5 className="fw-bold text-light">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link to="/" className="text-light footer-link" onClick={this.handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="text-light footer-link" onClick={this.handleLinkClick}>
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-light footer-link" onClick={this.handleLinkClick}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-light footer-link" onClick={this.handleLinkClick}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-light footer-link" onClick={this.handleLinkClick}>
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-lg-4 col-md-12 mb-4">
              <h5 className="fw-bold text-light">Contact Us</h5>
              <p>
                Email:{" "}
                <a href="mailto:nileshpatil3052@gmail.com" className="text-light">
                  nileshpatil3052@gmail.com
                </a>
              </p>
              <p>Phone: +91 9359541340</p>
            </div>
          </div>

          {/* Horizontal Divider */}
          <hr style={{ borderColor: "#555" }} />

          {/* Social Media Section */}
          <div className="row align-items-center text-center">
            <div className="col-md-6 text-md-start mb-3 mb-md-0">
              <p>&copy; 2024 EduLearn. All rights reserved.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <a href="https://facebook.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com" className="text-light me-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://instagram.com" className="text-light" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
