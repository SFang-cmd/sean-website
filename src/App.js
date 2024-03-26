import './App.css';
import React from 'react';

import m323img from './imgs/M323.png'
import jchem from './imgs/jchemVol100No2.jpg'
import pemfcImg from './imgs/PEMFCImg.png'
import aemfcImg from './imgs/AEMFCImg.png'
import HiMCM22img from './imgs/HiMCM22.png'
import MCM22img from './imgs/MCM22.png'
import MTFC22img from './imgs/MTFC22.jpg'
import M322img from './imgs/M322.png'
import HiMCM21img from './imgs/HiMCM21.png'
import RoboticsImg from './imgs/Robotics.JPG'
import MinesweeperImg from './imgs/MinesweeperPrev.png'
import ShortsImg from './imgs/ShortFormVideo.png'
import WebsiteImg from './imgs/Website.png'

import m323 from './attachments/M323.pdf'
import AEMFC from './attachments/AEMFC.pdf'
import PEMFC from './attachments/PEMFC.pdf'
import HiMCM22 from './attachments/HiMCM22.pdf'
import MCM22 from './attachments/MCM22.pdf'
import MTFC22 from './attachments/MTFC22.pdf'
import M322 from './attachments/M322.pdf'
import HiMCM21 from './attachments/HiMCM21.pdf'

// "build": "CI=false && react-scripts --openssl-legacy-provider build",

window.onscroll = () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".navBar .container ul li");
  var current = "";
  const windHeight = window.innerHeight;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    // console.log(sectionTop);
    // console.log(sectionHeight);
    // console.log(window.scrollY);
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
  sections.forEach((sec) => {
    sec.classList.remove("fade-in");
    sec.classList.add("hidden");
    if (sec.id === current) {
      sec.classList.remove("hidden");
      sec.classList.add("fade-in");
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
    <a href="">
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
          {/* <li className="experience"><a href="#experience">Experience</a></li> */}
          {/* <li className="news"><a href="#news">News</a></li> */}
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
    <section id="home" className="homeDiv fade-in">
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
    {/* <section id="experience" className="experienceDiv">
      <Experience/>
    </section> */}
    {/* <section id="news" className="newsDiv">
      <News/>
    </section> */}
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
    <div>
      <h2 className="bio">
        I'm Sean, a student at Penn driven by intellectual curiosity and creativity. 
      </h2>
      <h3>
        This portfolio showcases my innovative projects that fuse coding, robotics, STEM disciplines, and artistic vision.
        My work aims to meaningfully impact the world through thoughtful innovation.
        <br/>
        <br/>
        I'm eager to connect with others who share my passion - let's collaborate to shape the future!
        <br/>
        <br/>
        <i>The Best Way to Predict the Future is to Invent it.</i> <br/>
        <i>- Abraham Lincoln</i>
      </h3>
    </div>
  )
}

function Research() {
  return (
    <div className="research">
      <h2>
        My research
      </h2>
      <span>
        <div className="gallery rounded">
          <a href={m323} target="_blank">
            <div className="img-crop rounded">
              <img src={m323img} alt="M3 Challenge 2023 Bike Problem"/>
            </div>
            <h3 className="descTitle">E-Bike Data Integration</h3>
            <p className="desc">MathWorks Math Modeling research paper, to develop predictive models in forecasting electric bicycle adoption in the United States and analyze its potential impacts. 
            I led the development of machine learning models to forecast e-bike adoption in the US and its impacts. 
            My work included research and building a Markov chain model to analyze how increased e-bike use would affect key environmental and public health factors.
            </p>
            <span className="tag">Python</span>
            <span className="tag">Markov Chain Models</span>
            <span className="tag">NumPy</span>
            <span className="tag">SciKitLearn</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">LaTeX</span>
            <span className="tag">Regression</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href="https://doi.org/10.1021/acs.jchemed.2c00987" target="_blank">
            <div className="img-crop rounded">
              <img src={jchem} alt="Journal of Chemical Education Vol100.3"/>
            </div>
            <h3 className="descTitle">ACS Published Polystyrene Spincasting</h3>
            <p className="desc">ACS JCE published research paper on using Spin Casting to determine the relations between 
            Polystyrene molecular weights and concentrations. 
            I led the data analysis team to find appropriate curve-fit equations, 
            and I also performed chemical experiments and data collection in a wet lab, utilizing machines like a spincaster and ellipsometer.
            </p>
            <span className="tag">Data Analytics</span>
            <span className="tag">Materials Science</span>
            <span className="tag">Chemistry</span>
            <span className="tag">Wet Lab</span>
            <span className="tag">Polystyrene</span>
            <span className="tag">Spincasting</span>
            <span className="tag">Ellipsometry</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={PEMFC} target="_blank">
            <div className="img-crop rounded">
              <img src={pemfcImg} alt="MRS PEMFC Poster"/>
            </div>
            <h3 className="descTitle">Proton Exchange Membrane Fuel Cells</h3>
            <p className="desc">Researched a more sustainable, renewable cellulose-based Proton Exchange Membrane Fuel Cells
            </p>
            <span className="tag">Machine Learning</span>
            <span className="tag">Data Science</span>
            <span className="tag">Math Modeling</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={AEMFC} target="_blank">
            <div className="img-crop rounded">
              <img src={aemfcImg} alt="MRS AEMFC Presentation"/>
            </div>
            <h3 className="descTitle">MRS Conference AEMFC Speaking Presentation</h3>
            <p className="desc">Competition research paper on analyzing the benefits of 
            integrating E-Bikes with the current sustainable energy plan.
            </p>
            <span className="tag">Machine Learning</span>
            <span className="tag">Data Science</span>
            <span className="tag">Math Modeling</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={HiMCM22} target="_blank">
            <div className="img-crop rounded">
              <img src={HiMCM22img} alt="HiMCM Math Modeling Challenge"/>
            </div>
            <h3 className="descTitle">HiMCM Math Modeling Paper (2022)</h3>
            <p className="desc">Competition research paper on analyzing the benefits of 
            integrating E-Bikes with the current sustainable energy plan.
            </p>
            <span className="tag">Machine Learning</span>
            <span className="tag">Data Science</span>
            <span className="tag">Math Modeling</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={MCM22} target="_blank">
            <div className="img-crop rounded">
              <img src={MCM22img} alt="MCM Math Modeling Challenge"/>
            </div>
            <h3 className="descTitle">MCM Math Modeling Paper (2022)</h3>
            <p className="desc">Competition research paper on analyzing the benefits of 
            integrating E-Bikes with the current sustainable energy plan.
            </p>
            <span className="tag">Machine Learning</span>
            <span className="tag">Data Science</span>
            <span className="tag">Math Modeling</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={MTFC22} target="_blank">
            <div className="img-crop rounded">
              <img src={MTFC22img} alt="Journal of Chemical Education Vol100.3"/>
            </div>
            <h3 className="descTitle">ACS Published Polystyrene Spincasting</h3>
            <p className="desc">ACS JCE published research paper on using Spin Casting to determine the relations between 
            Polystyrene molecular weights and concentrations. 
            I led the data analysis team to find appropriate curve-fit equations, 
            and I also performed chemical experiments and data collection in a wet lab.
            </p>
            <span className="tag">Data Analytics</span>
            <span className="tag">Materials Science</span>
            <span className="tag">Chemistry</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={M322} target="_blank">
            <div className="img-crop rounded">
              <img src={M322img} alt="M3 Challenge 2022 Remote Work Problem"/>
            </div>
            <h3 className="descTitle">MathWorks Math Modeling Paper (2022)</h3>
            <p className="desc">Competition research paper on analyzing the benefits of 
            integrating E-Bikes with the current sustainable energy plan.
            </p>
            <span className="tag">Machine Learning</span>
            <span className="tag">Data Science</span>
            <span className="tag">Math Modeling</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={HiMCM21} target="_blank">
            <div className="img-crop rounded">
              <img src={HiMCM21img} alt="HiMCM Math Modeling Challenge"/>
            </div>
            <h3 className="descTitle">HiMCM Math Modeling Paper (2021)</h3>
            <p className="desc">Competition research paper on analyzing the benefits of 
            integrating E-Bikes with the current sustainable energy plan.
            </p>
            <span className="tag">Machine Learning</span>
            <span className="tag">Data Science</span>
            <span className="tag">Math Modeling</span>
          </a>
        </div>
      </span>
    </div>
  )
}

function Projects() {
  return (
    <div className="research">
      <h2 className="projects">
        My projects
      </h2>
      <span>
      <div className="list rounded">
          <a href="https://github.com/SFang-cmd/sean-website" target="_blank">
            <span className="listEntry">
              <div className="projectImg rounded">
                <img src={WebsiteImg} alt="Personal Website Homepage"/>
              </div>
              <div className="listDesc">
                <h3 className="descTitle">Personal Website</h3>
                <p className="desc">A React Javascript and CSS project programmed by myself.
                The project structure was provided by Create React App, 
                but the styling, coloring, and animations are all completely developed independently.
                My personal website has been a bit of a pet project for the past few years, 
                and it was honestly really fun to make.
                </p>
                <span className="tag">JavaScript</span>
                <span className="tag">CSS</span>
                <span className="tag">ReactJS</span>
                <span className="tag">npm</span>
                <span className="tag">Website Hosting</span>
              </div>
            </span>
          </a>
        </div>
      <div className="list rounded">
          <a href="https://github.com/SFang-cmd/shortFormVideoMaker" target="_blank">
            <span className="listEntry">
              <div className="projectImg rounded">
                <img src={ShortsImg} alt="YouTube Shorts Sample"/>
              </div>
              <div className="listDesc">
                <h3 className="descTitle">Viral Anecdote Video Generator</h3>
                <p className="desc">A Python project that pulls Reddit Story Posts
                and converts the story into a bingeable series of YouTube Videos.
                Audio is generated by first converting the text to speech using the TikTok voice API, 
                then captions are generated by converting the speech back to text using OpenAI Whisper.
                Video concatenation is made via MoviePy. Posting will be based off of YouTube/TikTok API for posting.
                </p>
                <span className="tag">Python</span>
                <span className="tag">WhisperAPI</span>
                <span className="tag">TikTokAPI</span>
                <span className="tag">YouTubeAPI</span>
                <span className="tag">Python Requests (HTTPS)</span>
                <span className="tag">MoviePy</span>
                <span className="tag">PRAW</span>
                <span className="tag">Tkinter</span>
              </div>
            </span>
          </a>
        </div>
        <div className="list rounded">
          <a href="https://github.com/SFang-cmd/minesweeper" target="_blank">
            <span className="listEntry">
              <div className="projectImg rounded">
                <img src={MinesweeperImg} alt="Minesweeper Title Page"/>
              </div>
              <div className="listDesc">
                <h3 className="descTitle">Minesweeper Game</h3>
                <p className="desc">A Java implementation of the classic Minesweeper game.
                Play the game with different size maps, save current games to play later, and
                load previous games to play that are saved into file IO.
                Implemented as a freestyle "build anything" homework for the CIS1200 course at Penn.
                </p>
                <span className="tag">Java</span>
                <span className="tag">Data Structures</span>
                <span className="tag">Unit Testing</span>
                <span className="tag">File I/O</span>
                <span className="tag">Subtyping/Inheritance</span>
              </div>
            </span>
          </a>
        </div>
        <div className="list rounded">
          <a href="https://github.com/team422/FRC-22-Rewrite" target="_blank">
            <span className="listEntry">
              <div className="projectImg rounded">
                <img src={RoboticsImg} alt="Robotics Win Picture"/>
              </div>
              <div className="listDesc">
                <h3 className="descTitle">Robotics Programming Project</h3>
                <p className="desc">Work as Team Leader and Member of Programming on First Robotics Competition (FRC) Team 422.
                Main focus included PID, Vision Processing, Kinematics/Odometry, and Autonomous Pathfinding.
                </p>
                <span className="tag">Java</span>
                <span className="tag">OpenCV</span>
                <span className="tag">PID</span>
                <span className="tag">Path Finding</span>
                <span className="tag">Image Processing</span>
                <span className="tag">Object Oriented Programming</span>
                <span className="tag">Interfaces</span>
                <span className="tag">WPILib</span>
              </div>
            </span>
          </a>
        </div>
      </span>
    </div>
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
          <div className="fade-top"></div>
          <AppContent/>
          <div className="fade-bot"></div>
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