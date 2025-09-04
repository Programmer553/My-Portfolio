import './css/projects.css';
import pic1 from '../images/Student.jpg';
import pic2 from '../images/email.png';
import pic3 from '../images/todo.png';
import pic4 from '../images/connect.png';
import pic5 from '../images/calculator.png';
import pic6 from '../images/ecom.png';

const projectList = [
  {
    name: "Student Management System",
    image: pic1,
    github: "https://github.com/Programmer553/Student-Management-System",
    description: "A comprehensive system to manage student records and academic information."
  },
  {
    name: "Email Reply Generator",
    image: pic2,
    github: "https://github.com/Programmer553/Email-Reply-Generator",
    description: "An AI-powered tool that generates professional email responses."
  },
  {
    name: "To Do List",
    image: pic3,
    github: "https://github.com/Programmer553/To-Do-List",
    description: "A simple and intuitive task management application."
  },
  {
    name: "Connect Four Game",
    image: pic4,
    github: "https://github.com/Programmer553/Connect-Four-Game",
    description: "Classic Connect Four game with a modern UI implementation."
  },
  {
    name: "Calculator",
    image: pic5,
    github: "https://github.com/Programmer553/Calculator",
    description: "A fully functional calculator with basic arithmetic operations."
  },
  {
    name: "E-Commerce",
    image: pic6,
    github: "https://github.com/Programmer553/E-Commerce",
    description: "A fully functional calculator with basic arithmetic operations."
  }
];

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div id='container'>
        {projectList.map((project, idx) => (
          <div className='project' key={idx}>
            <img src={project.image} alt={project.name} className='project-img' />
            <h2>{project.name}</h2>
            <p className='project-description'>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className='github-link'>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
