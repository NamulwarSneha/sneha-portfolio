import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import LearnWithMe from "./components/LearnWithMe";
import ProjectSection from "./components/ProjectSection";
import NotFound from "./components/NotFound";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route exact path="/LearnWithme" element={<LearnWithMe />} />
          <Route exact path="/Projects" element={<ProjectSection />} />
          <Route exact path="/not-found" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;