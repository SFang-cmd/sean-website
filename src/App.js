import logo from './logo.svg';
import './App.css';
import React from 'react';
import jchem from './imgs/jchemVol100No2.jpg'
import ReactDOM from 'react-dom';
import $ from 'jquery';

window.onscroll = () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".navBar .container ul li");
  var current = "";
  const windHeight = window.innerHeight;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // console.log(sectionTop);
    // console.log(sectionHeight);
    // console.log(window.scrollY + sectionHeight);
    if (window.scrollY + windHeight >= sectionTop) {
      // console.log(window.scrollY + sectionHeight);
      current = section.getAttribute("id"); }
    // sectionHeight += section.offsetHeight;
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};


function FontImport() {
  return (
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap')
    </style>
  )
}

function Header() {
  return (
    <a href="#app">
      <header className="appHeader">
          <h1 className="Sean">Sean Fang</h1>
          <p className="Titles">Computer Science and Robotics</p>
      </header>
    </a>
  )
}

function Navigation() {
  return (
    <nav className="navBar">
      <div className="container">
        <ul className="navList">
          <li className="home active"><a href="#app">Home</a></li>
          <li className="bio"><a href="#bio">About Me</a></li>
          <li className="research"><a href="#research">Research</a></li>
          <li className="projects"><a href="#projects">Projects</a></li>
          <li className="experience"><a href="#experience">Experience</a></li>
          <li className="news"><a href="#news">News</a></li>
          <li className="resume"><a href="#resume">Resume</a></li>
          <li className="contact"><a href="#contact">Contact Me</a></li>
        </ul>
      </div>
    </nav>
  )
}

function AppContent() {
  return (
  <div className="appContent">
    <section id="home" className="homeDiv">
      <Home/>
    </section>
    <section id="bio" className="bioDiv">
      <Bio/>
    </section>
    <section id="research" className="researchDiv">
      <Research/>
    </section>
    <section id="projects" className="projectDiv">
      <Projects/>
    </section>
    <section id="experience" className="experienceDiv">
      <Experience/>
    </section>
    <section id="news" className="newsDiv">
      <News/>
    </section>
    <section id="resume" className="resumeDiv">
      <Resume/>
    </section>
    <section id="contact" className="contactDiv">
      <Contact/>
    </section>
  </div>
  )
}

function Home() {
  return (
    <h2 href="home" className="home">
      hello;
    </h2>
  )
}

function Bio() {
  return (
    <h2 className="bio">
      I'm Sean Fang, a student working to change the world. 
      I am currently pursuing a Computer Science BSE and Robotics MSE at UPenn.<br/>
      "The Best Way to Predict the Future is to Invent it" <br/>
      - Abraham Lincoln
    </h2>
  )
}

function Research() {
  return (
    <div className="research">
      <h2>
        My research
      </h2>
      <div className="gallery rounded">
        <a href="https://doi.org/10.1021/acs.jchemed.2c00987" target="_blank">
          <div className="img-crop rounded">
            <img src={jchem} alt="project 1"/>
          </div>
          <h3 className="descTitle">Polystyrene Laboratory Analysis</h3>
          <p className="desc">Research paper on using Spin Casting to determine the relations between 
          Polystyrene Molecular Weights and concentrations. 
          I led the data analysis team to find appropriate curve-fit equations, 
          and I also performed chemical experiments and data collection in a wet lab.
          </p>
          <span className="tag">Data Analytics</span>
          <span className="tag">Materials Science</span>
          <span className="tag">Chemistry</span>
        </a>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <h2 className="projects">
      My projects
    </h2>
  )
}

function Experience() {
  return (
    <h2 className="experience">
      My Job Experience
    </h2>
  )
}

function News() {
  return (
    <h2 className="news">
      News about Sean
    </h2>
  )
}

function Resume() {
  return (
    <h2 className="resume">
      Find my resume
    </h2>
  )
}

function Contact() {
  return (
    <h2 className="contact">
      Contact me here
    </h2>
  )
}

function Footer() {
  return (
    <footer className="foot">
      Stuff
    </footer>
  )
}

function App() {
  return (
    <div id="app" className="App">
      <div className="App-Background">
        <div className="AppHeader">
          <FontImport/>
          <Header/>
          <Navigation/>
        </div>
        <div className="AppContent">
          <AppContent/>
        </div>
      </div>
    </div>
  );
  // <div className="FooterContent">
  // <Footer/>
  // </div>
}
export default App;

// App color scheme: https://coolors.co/c9cad9-d1d2f9-a3bcf9-7796cb-576490

{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a test
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}