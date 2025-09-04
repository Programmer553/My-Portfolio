import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 
import Intro from './components/Intro';
import Projects from './components/Projects';
import Profiles from './components/Profiles';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home">
          <Intro />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="profiles">
          <Profiles />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="resume">
          <Resume />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
