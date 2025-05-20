/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <span>+91 8332090588</span>
          </div>
          <div className="info-item">
            <i className="fas fa-link"></i>
            <span>
              <a href="#">snehawebdev</a>
            </span>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <span>snehajnp57@gmail.com</span>
          </div>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Hyderabad, Telangana, India</span>
          </div>
          <div className="social-icons">
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sneha-namulwar-4b5374bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/NamulwarSneha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Your Email" />
            <textarea placeholder="Enter Your Message"></textarea>
            <button
              type="submit"
              onClick={() => {
                alert("thank you for your interest");
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;