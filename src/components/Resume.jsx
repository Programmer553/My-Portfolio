import React from 'react';
import { FaDownload } from 'react-icons/fa';
import './css/resume.css';
import resumePDF from '../assets/Shivaram_Resume.pdf';

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <h1 className="section-title">My Resume</h1>
        <div className="resume-embed">
          <div className="a4-paper">
            <iframe 
              src={`${resumePDF}#view=FitH`}
              title="Shivaram Naik's Resume"
              className="resume-iframe"
              allowFullScreen
            >
              Your browser does not support PDFs. 
              <a href={resumePDF} target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </iframe>
          </div>
          <div className="resume-download">
            <a 
              href={resumePDF} 
              download="Shivaram_Naik_Resume.pdf"
              className="download-btn"
            >
              <FaDownload /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
