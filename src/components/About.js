import React, { Component } from "react";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: About Component is being initialized.");
      }
    
      componentDidMount() {
        console.log("componentDidMount: About Component has been rendered to the screen.");
      }
    
      componentDidUpdate() {
        console.log("componentDidUpdate: About Component has been updated.");
      }
    
      componentWillUnmount() {
        console.log("componentWillUnmount: About Component is about to be removed from the DOM.");
      }
  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">About Us</h2>
        <div className="row">
          {/* About Text Section */}
          <div className="col-md-6">
            <h5>Who We Are</h5>
            <p>
              EduLearn is a leading online platform dedicated to empowering learners around the globe. We offer courses
              across diverse domains such as technology, business, personal development, and more.
            </p>
            <p>
              Our mission is to make quality education accessible to everyone, anytime and anywhere. Whether you're
              a beginner starting your journey or a professional looking to upskill, EduLearn is here to help.
            </p>
          </div>

          {/* Image Section */}
          <div className="col-md-6">
            <img
              src="about.jpg" // Replace with an actual image URL
              alt="About EduLearn"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>

        {/* Call-to-Action Section */}
        <div className="text-center mt-4">
          <h5>Ready to Begin Your Learning Journey?</h5>
          <p>Explore our courses and start building your future today!</p>
          <a href="#courses" className="btn btn-primary">
            View Courses
          </a>
        </div>
      </div>
    );
  }
}

export default About;
