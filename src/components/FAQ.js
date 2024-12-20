import React, { Component } from "react";

class FAQ extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: FAQ Component is being initialized.");
      }
    
      componentDidMount() {
        console.log("componentDidMount: FAQ Component has been rendered to the screen.");
      }
    
      componentDidUpdate() {
        console.log("componentDidUpdate: FAQ Component has been updated.");
      }
    
      componentWillUnmount() {
        console.log("componentWillUnmount: FAQ Component is about to be removed from the DOM.");
      }
  render() {
    const faqs = [
      {
        question: "What is EduLearn?",
        answer: "EduLearn is an online learning platform offering a wide range of courses to help you grow academically and professionally.",
      },
      {
        question: "How do I enroll in a course?",
        answer: "You can browse our courses, select the one you're interested in, and click 'Enroll Now' to get started.",
      },
      {
        question: "Are the courses self-paced?",
        answer: "Yes, all our courses are designed to be self-paced so you can learn at your convenience.",
      },
      {
        question: "Do I get a certificate after completing a course?",
        answer: "Yes, you will receive a certificate of completion for most of our courses once all requirements are met.",
      },
      {
        question: "How can I contact support?",
        answer: "You can reach out to our support team at support@edulearn.com or call us at +1 (123) 456-7890.",
      },
    ];

    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, index) => (
            <div
              className="border p-3 mb-3 rounded"
              key={index}
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <h5 className="mb-2">{faq.question}</h5>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FAQ;
