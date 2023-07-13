import React from "react";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <Projects />
      <About />
     <Contact />
    </main>
  );
}

export default App;
