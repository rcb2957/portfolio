import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'
import Work from './Work.jsx'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

function App() {

  return (
    <>

      {/* Link to Download Resume */}
      <a href="/resume.pdf" download>
        Download Resume
      </a>

      {/* Light VS Dark Mode Toggle */}
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>

      <div>
        <BrowserRouter>
          {/* Links to the different pages of the site */}
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="/about">About</Link> |{" "}
            <Link to="/projects">Projects</Link> |{" "}
            <Link to="/work">Work Experience</Link> |{" "}
            <Link to="/contact">Contact</Link>
          </nav>

          <hr />

          {/* Switch between the different pages of the site */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>

      </div>
    </>
  );
}

export default App
