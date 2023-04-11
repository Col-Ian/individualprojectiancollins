import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Home from "./Components/Home";

import Footer from "./Components/Footer";
import Add from "./Components/Add";

function App() {
  return (
    <Router>
      <header>
        <h1>Ian Collins Portfolio</h1>
        <nav>
          <Link to="/" className="links">
            Home
          </Link>
          <Link to="/projects" className="links">
            Projects
          </Link>
          <Link to="/skills" className="links">
            Skills
          </Link>
          <Link to="/add" className="links">
            Math
          </Link>
        </nav>
        <hr />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/add" element={<Add />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
