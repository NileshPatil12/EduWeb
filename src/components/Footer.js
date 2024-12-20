import React, { Component } from "react";

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
  render() {
    return (
      <footer className="text-center bg-dark text-white py-5">
        <div className="container">
          {/* Main footer content */}
          <div className="row mb-4">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>
                EduLearn is an online platform offering a wide range of courses designed to help students grow academically and professionally.
              </p>
            </div>
            <div className="col-md-4">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#home" className="text-white">Home</a>
                </li>
                <li>
                  <a href="#courses" className="text-white">Courses</a>
                </li>
                <li>
                  <a href="#about" className="text-white">About</a>
                </li>
                <li>
                  <a href="#contact" className="text-white">Contact</a>
                </li>
                <li>
                  <a href="#faq" className="text-white">FAQ</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>
                Email: <a href="mailto:info@edulearn.com" className="text-white">info@edulearn.com</a>
              </p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
          </div>

          {/* Social media links */}
          <div className="social-media mb-4">
            <a href="https://facebook.com" className="text-white mr-3">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white mr-3">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-white mr-3">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="text-white mr-3">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Footer bottom */}
          <div className="footer-bottom">
            <p>&copy; 2024 EduLearn. All rights reserved.</p>
            <div>
              <a href="/privacy-policy" className="text-white mr-3">Privacy Policy</a>
              <a href="/terms-of-service" className="text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
