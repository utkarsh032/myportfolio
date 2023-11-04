import './App.css';

import Skills from './pages/Skills'
import Footer from './pages/Footer'
import Contact from './pages/Contact'
import Tools from './pages/Tools'
import Projects from './pages/Projects'
import Static from './pages/Static'
import About from './pages/About'
import Navbar from './components/Navbar';
import Home from './pages/Home';



function App() {
  return (<>
    <Navbar />
    <Home />
    <Skills />
    <Static />
    <About />
    <Projects />
    <Tools />
    <Contact />
    <Footer />
  </>)

}

export default App;
