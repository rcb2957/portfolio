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
    // <>
      // <div className="nav-grid">

      //     <div>
      //       {/* Link to Download Resume */}
      //       <a href="/resume.pdf" download>
      //         Download Resume
      //       </a>
      //     </div>

      //     <div>
      //       {/* Light VS Dark Mode Toggle */}
      //       <button onClick={toggleTheme}>
      //         Toggle Theme
      //       </button>
      //     </div>

        
          <BrowserRouter>
        <div className="nav-grid">
          <div>
            {/* Links to the different pages of the site */}
            <nav>
              <Link to="/">Home</Link> |{" "}
              <Link to="/about">About</Link> |{" "}
              <Link to="/projects">Projects</Link> |{" "}
              <Link to="/work">Work Experience</Link> |{" "}
              <Link to="/contact">Contact</Link>
            </nav>
            </div>
            {/* Light VS Dark Mode Toggle */}
            <div>
            <button onClick={toggleTheme}>
              Toggle Theme
            </button>
            {/* Link to Download Resume */}
            <a href="/resume.pdf" download>
              Download Resume
            </a>
            </div>
            </div>
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

      // </div>
    // </>
  );
}

export default App
