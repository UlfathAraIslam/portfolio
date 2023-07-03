// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import Home from './Home/Home/Home';
// import Resume from './Resume/Resume';
// import Projects from './Projects/Projects';
// import AboutMe from './Home/Home/AboutMe/AboutMe';
// const App = () => {
//   return (
//     <Router>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/resume">Resume</Link>
//           </li>
//           <li>
//             <Link to="/projects">Projects</Link>
//           </li>
//           <li>
//             <Link to="/about">About Me</Link>
//           </li>
//         </ul>
//       </nav>

//       <Route path="/" exact component={Home} />
//       <Route path="/resume" component={Resume} />
//       <Route path="/projects" component={Projects} />
//       <Route path="/about" component={AboutMe} />

//       <footer>
//         This is the footer.
//       </footer>
//     </Router>
//   );
// };

// export default App;
// -----------------------------------------

import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import './index.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;