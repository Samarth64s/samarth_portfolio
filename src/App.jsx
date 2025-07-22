import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Work from "./components/Work";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      {/* Global Header on all pages */}
      <Header />

      {/* Routing for different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


    </Router>
  );
}

export default App;
