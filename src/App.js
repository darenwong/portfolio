import React, { useRef } from "react";
import "./App.css";
import TopBar from "./components/TopBar.js";
import Hello from "./components/Hello.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Experience from "./components/Experience.js";
import Projects from "./components/Projects.js";
import Contact from "./components/Contact.js";
import FadeInSection from "./components/FadeInSection.js";
import smoothscroll from "smoothscroll-polyfill";

// kick off the polyfill!
smoothscroll.polyfill();

function App() {
  const helloRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    console.log("hello", ref);
    switch (ref) {
      case "hello":
        helloRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "experience":
        experienceRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <TopBar scrollToSection={scrollToSection} />
      <FadeInSection>
        <Hello sref={helloRef} scrollToSection={scrollToSection} />
      </FadeInSection>
      <FadeInSection>
        <About sref={aboutRef} />
      </FadeInSection>
      <FadeInSection>
        <Skills sref={skillsRef} />
      </FadeInSection>
      <FadeInSection>
        <Experience sref={experienceRef} />
      </FadeInSection>
      <FadeInSection>
        <Projects sref={projectsRef} />
      </FadeInSection>
      <FadeInSection>
        <Contact sref={contactRef} />
      </FadeInSection>
    </div>
  );
}

export default App;
