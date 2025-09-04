import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from 'react-icons/si';
import { Link } from 'react-scroll';
import './css/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/Programmer553', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/shivaram-naik-sabavath-856a0329a', label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/shivaramnaik53/', label: 'LeetCode' },
    { icon: <SiCodechef />, url: 'https://codechef.com/users/shivaramnaik53', label: 'CodeChef' },
    { icon: <SiGeeksforgeeks />, url: 'https://auth.geeksforgeeks.org/user/shivaramx8rw', label: 'GeeksforGeeks' },
    { icon: <FaEnvelope />, url: 'mailto:gamingmotuji@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">Shivaram Naik</h3>
            <p className="footer-tagline">Full Stack Developer & Problem Solver</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subheading">Quick Links</h4>
            <div className="footer-links">
              <Link to="home" smooth={true} duration={500} className="footer-link" onClick={() => window.scrollTo(0, 0)}>
                Home
              </Link>
              <Link to="projects" smooth={true} offset={-70} duration={500} className="footer-link">
                Projects
              </Link>
              <Link to="profiles" smooth={true} offset={-70} duration={500} className="footer-link">
                Profiles
              </Link>
              <Link to="contact" smooth={true} offset={-70} duration={500} className="footer-link">
                Contact
              </Link>
              <Link to="resume" smooth={true} offset={-70} duration={500} className="footer-link">
                Resume
              </Link>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subheading">Legal</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Shivaram Naik. All rights reserved.
          </p>
          <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to Top ↑
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
