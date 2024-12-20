import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    console.log("Constructor: Contact Component is being initialized.");
  }

  componentDidMount() {
    console.log("componentDidMount: Contact Component has been rendered to the screen.");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate: Contact Component has been updated.");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount: Contact Component is about to be removed from the DOM.");
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted with the following data:");
    console.log("Name:", this.state.name);
    console.log("Email:", this.state.email);
    console.log("Message:", this.state.message);
  };

  render() {
    console.log("render: About Component is being rendered.");
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row">
          {/* Contact Information */}
          <div className="col-md-6">
            <h5 className="mb-4">Get in Touch</h5>
            <p>
              If you have any questions or need assistance, feel free to reach out to us using the following details:
            </p>
            <ul className="list-unstyled">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@edulearn.com">support@edulearn.com</a>
              </li>
              <li>
                <strong>Phone:</strong> +1 (123) 456-7890
              </li>
              <li>
                <strong>Address:</strong> 123 EduLearn Avenue, Knowledge City, Learnland, 45678
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h5 className="mb-4">Send Us a Message</h5>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;