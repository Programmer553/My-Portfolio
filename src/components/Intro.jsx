import pro_pic from '/src/images/My_Pic.jpg';
import './css/Intro.css';

const Intro = () => {
  const skills = [
    'Java', 'JavaScript', 'React.js', 'Node.js', 
    'Spring Boot', 'Express.js', 'PostgreSQL', 'MySQL', 
    'HTML5', 'CSS3', 'Data Structures', 'Algorithms'
  ];

  return (
    <section className="intro-section" id="home">
      <div className="container">
        <div className="intro-content">
          <div className="intro-text">
            <h1 className="intro-heading">
              Hi, I'm <span className="highlight">Shivaram Naik</span>
            </h1>
            
            <p className="intro-description">
              A passionate Full Stack Developer with expertise in building robust and scalable web applications. 
              I recently graduated with a Bachelor's degree in Computer Science from MLRITM, achieving an 
              impressive CGPA of 8.5.
            </p>
            
            <div className="skills-container">
              <h3 className="skills-heading">Technical Skills</h3>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="intro-image">
            <div className="image-wrapper">
              <img 
                src={pro_pic} 
                alt="Shivaram Naik" 
                className="profile-image"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
