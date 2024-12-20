import React, { Component } from "react";

class Courses extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: Courses Component is being initialized.");
      }
    
      componentDidMount() {
        console.log("componentDidMount: Courses Component has been rendered to the screen.");
      }
    
      componentDidUpdate() {
        console.log("componentDidUpdate: Courses Component has been updated.");
      }
    
      componentWillUnmount() {
        console.log("componentWillUnmount: Courses Component is about to be removed from the DOM.");
      }
  render() {
    const courseList = [
      {
        title: "HTML for Beginners",
        description: "Learn the basics of HTML and build the foundation for web development.",
      },
      {
        title: "CSS Mastery",
        description: "Master CSS and create visually stunning, responsive websites.",
      },
      {
        title: "JavaScript Essentials",
        description: "Understand the fundamentals of JavaScript to create dynamic web applications.",
      },
      {
        title: "React Basics",
        description: "Get started with React and build modern single-page applications.",
      },
      {
        title: "Python for Data Science",
        description: "Learn Python programming and its applications in data analysis and machine learning.",
      },
    ];

    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Courses</h2>
        <div className="row">
          {courseList.map((course, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Courses;
