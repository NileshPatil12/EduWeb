import React, { Component } from "react";
import './Home.css';  // Importing the CSS file for background styling

// Import images
import learnImage from '../images/learn.jpg';  // Image for Learn at Your Own Pace
import instructorImage from '../images/instructor.jpg';  // Image for Expert Instructors
import flexibilityImage from '../images/flexible.jpg';  // Image for Flexible Learning

class Home extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: Home Component is being initialized.");
    }

    componentDidMount() {
        console.log("componentDidMount: Home Component has been rendered to the screen.");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate: Home Component has been updated.");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount: Home Component is about to be removed from the DOM.");
    }

    render() {
        return (
            <div className="home-container text-center ">
                <h1 className="hero-title">Welcome to EduLearn</h1>
                <p className="lead hero-subtitle">Your journey to mastering skills starts here!</p>

                <div className="row mt-4">
                    <div className="col-md-4">
                        <img src={learnImage} alt="Learn at Your Own Pace" className="img-fluid1 rounded shadow" />
                        <h3>Learn at Your Own Pace</h3>
                        <p>Access high-quality courses designed to help you grow academically and professionally.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={instructorImage} alt="Expert Instructors" className="img-fluid1 rounded shadow" />
                        <h3>Expert Instructors</h3>
                        <p>Learn from industry professionals with years of experience in their fields.</p>
                    </div>
                    <div className="col-md-4">
                        <img src={flexibilityImage} alt="Flexible Learning" className="img-fluid1 rounded shadow" />
                        <h3>Flexible Learning</h3>
                        <p>Study at your convenience with our self-paced learning modules.</p>
                    </div>
                </div>

                <div className="mt-5 cta-section">
                    <h3>Start Your Learning Journey Today</h3>
                    <p>Choose from a variety of courses and start learning now.</p>
                    <button className="btn btn-primary btn-lg">Browse Courses</button>
                </div>
            </div>
        );
    }
}

export default Home;
