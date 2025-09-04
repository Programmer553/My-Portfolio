import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import './css/contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-method">
            <h3>Email Me</h3>
            <a 
              href="mailto:shivaramnaik100@gmail.com" 
              className="contact-email"
            >
              <FaEnvelope className="email-icon" />
              shivaramnaik100@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
