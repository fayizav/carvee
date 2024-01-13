






import Header from "./components/Header"
import Footer from "./components/footer"
import Home from "./pages/home"
import About from "./pages/about"
import Projects from "./pages/menu"
import Contact from "./pages/contact"
import Showmore from "./pages/showmore"
import Explore1 from "./pages/explore1"
import Explore2 from "./pages/explore2"
import Explore3 from "./pages/explore3"
import Explore4 from "./pages/explore4"
import Explore5 from "./pages/explore5"
import Explore6 from "./pages/explore6"
import Explore7 from "./pages/explore7"
import Explore8 from "./pages/explore8"











import "./styles/app.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/showmore" element={<Showmore />} />
          <Route path="/exploremore/1" element={<Explore1 />} />
          <Route path="/exploremore/2" element={<Explore2 />} />
          <Route path="/exploremore/3" element={<Explore3 />} />
          <Route path="/exploremore/4" element={<Explore4 />} />
          <Route path="/exploremore/5" element={<Explore5 />} />
          <Route path="/exploremore/6" element={<Explore6 />} />
          <Route path="/exploremore/7" element={<Explore7 />} />
          <Route path="/exploremore/8" element={<Explore8 />} />
          
        </Routes>
    <Footer/>
      </Router>
    </div>
  );
}

export default App;

