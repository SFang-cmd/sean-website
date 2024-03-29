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

import resume from './attachments/Resume.pdf'

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
          <li className="contact"><a href="#contact">Contact</a></li>
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
        My work aims to meaningfully impact the world through thoughtful invention.
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
            <h3 className="descTitle">US Electric Bike Integration</h3>
            <p className="desc">MathWorks Math Modeling (M3) 2023 research paper to develop predictive forecasting for electric bicycle adoption in the US. 
            Utilized machine learning to forecast e-bike sales in the US, predicting 3.1 million sales by 2028. 
            Performed ANOVA to identify key factors driving adoption, including disposable income and battery costs. 
            Developed a Markov Chain model to analyze the environmental and health impacts of rising e-bike usage over time.
            </p>
            <span className="tag">Python</span>
            <span className="tag">Markov Chain Models</span>
            <span className="tag">NumPy</span>
            <span className="tag">ANOVA</span>
            <span className="tag">SciKitLearn</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">LaTeX</span>
            <span className="tag">Regression</span>
            <span className="tag">MATLAB</span>
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
            Served as lead data analyst; developed monodispersity curve-fit equations relating polystyrene concentration to molecular weight. 
            Operated ellipsometer to measure film thickness; performed chemical experiments and spincasting in a wet lab.
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
            <p className="desc">Patent-pending methods presented at the Materials Research Society (MRS) Fall 2022 Conference.
            Created and treated cellulose membranes with acid solutions and a flame retardant to develop a renewable, low-cost alternative to Nafion in proton exchange membrane fuel cells. 
            Tested the modified membranes' power output, outperforming nanocellulose alone. 
            </p>
            <span className="tag">Wet Lab</span>
            <span className="tag">Fuel Cells</span>
            <span className="tag">Renewable PEMs</span>
            <span className="tag">Cellulose Membrane</span>
            <span className="tag">Acid Treatment</span>
            <span className="tag">Heat Treatment</span>
            <span className="tag">MRS</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={AEMFC} target="_blank">
            <div className="img-crop rounded">
              <img src={aemfcImg} alt="MRS AEMFC Presentation"/>
            </div>
            <h3 className="descTitle">Alkaline Exchange Membrane Fuel Cells</h3>
            <p className="desc">Developed alkaline anion exchange membranes for hydrogen fuel cells using silver nanoparticle deposition, resulting in higher power output. 
            Assisted in the nanoparticle deposition process. 
            Presented research at the Material Research Society Fall 2022 Conference. 
            Contributed to an innovative approach for enhancing clean energy technology.
            </p>
            <span className="tag">Fuel Cells</span>
            <span className="tag">Nanoparticle Deposition</span>
            <span className="tag">Alkaline Exchange Membranes</span>
            <span className="tag">Renewable Energy</span>
            <span className="tag">Materials Science</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={HiMCM22} target="_blank">
            <div className="img-crop rounded">
              <img src={HiMCM22img} alt="HiMCM Math Modeling Challenge"/>
            </div>
            <h3 className="descTitle">Honeybee Population Protection</h3>
            <p className="desc">HiMCM 2022 Research paper. Developed mathematical models to predict honeybee population dynamics and optimize placement of beehives for pollination in a 20-acre land parcel. 
            Used differential equations and Python to create a model that predicts bee colony size over time based on factors like egg-laying rate, mortality, and resource availability. 
            Built a simulation to determine the optimal number of sustainable hives for maximizing pollination.
            </p>
            <span className="tag">Math Modeling</span>
            <span className="tag">Optimization</span>
            <span className="tag">Python</span>
            <span className="tag">DiffEq</span>
            <span className="tag">Biology</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={MCM22} target="_blank">
            <div className="img-crop rounded">
              <img src={MCM22img} alt="MCM Math Modeling Challenge"/>
            </div>
            <h3 className="descTitle">Cyclist Power Level Optimization</h3>
            <p className="desc">MCM 2022 Research paper. Developed mathematical models to determine optimal power output for cyclists on a course based on their power profile, external conditions, and biochemistry. 
            Used computational methods and genetic algorithms to simulate time trials and optimize power curves for the fastest race times. 
            Analyzed the effects of perturbations like varying weather conditions and rider deviations. 
            Extended the model to optimize team cycling strategies like drafting.
            </p>
            <span className="tag">Math Modeling</span>
            <span className="tag">Optimization</span>
            <span className="tag">Differential Simulation</span>
            <span className="tag">Biochemistry</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={MTFC22} target="_blank">
            <div className="img-crop rounded">
              <img src={MTFC22img} alt="Journal of Chemical Education Vol100.3"/>
            </div>
            <h3 className="descTitle">Earthquake Damage Mitigation</h3>
            <p className="desc">Modeling the Future Challenge (MTFC) 2022 Research paper. Developed a multiple regression model to analyze the impact of extreme weather on power outages across different climate regions in the United States. 
            Used historical weather and power outage data to identify precipitation and temperature as key factors correlating with outage volume. 
            Provided region-specific recommendations to mitigate risks.
            </p>
            <span className="tag">Math Modeling</span>
            <span className="tag">Multiple Regression</span>
            <span className="tag">Risk Mitigation</span>
            <span className="tag">Environmental Science</span>
            <span className="tag">Data Analysis</span>
            <span className="tag">Data Scraping</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={M322} target="_blank">
            <div className="img-crop rounded">
              <img src={M322img} alt="M3 Challenge 2022 Remote Work Problem"/>
            </div>
            <h3 className="descTitle">Global Remote Work Analysis</h3>
            <p className="desc">2022 MathWorks Math Modeling (M3) Research paper. Developed models to predict the proportion and impact of remote work in five US and UK cities. 
            Used a neural network to forecast the percentage of remote-ready jobs in 2024 and 2027 based on historical employment data. 
            Built a game theory model considering employee and employer preferences to determine the likelihood of individuals choosing remote work. 
            Synthesized the models to assess the environmental, political, and economic impacts of remote work.
            </p>
            <span className="tag">Neural Networks</span>
            <span className="tag">Game Theory</span>
            <span className="tag">Forecasting</span>
            <span className="tag">Monte Carlo Simulation</span>
            <span className="tag">Remote Work</span>
            <span className="tag">Math Modeling</span>
          </a>
        </div>
        <div className="gallery rounded">
          <a href={HiMCM21} target="_blank">
            <div className="img-crop rounded">
              <img src={HiMCM21img} alt="HiMCM Math Modeling Challenge"/>
            </div>
            <h3 className="descTitle">HiMCM Math Modeling Paper (2021)</h3>
            <p className="desc">
            Modeled Lake Mead's volume using the prismoidal method on provided data and topographic maps. 
            Identified droughts via Mann-Kendall and elevation change rates. 
            Forecasted water levels with machine learning and Markov models that accounted for temperature, weather, usage rate, and other factors. 
            Identified possible solutions to mitigate losses based on analyzed factors.
            </p>
            <span className="tag">Math Calculation</span>
            <span className="tag">Kendall-Mann</span>
            <span className="tag">Markov Chain</span>
            <span className="tag">Environmental Science</span>
            <span className="tag">Drought</span>
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
    <div>
      <h2 className="resume">
        Resume
      </h2>
      <object className="resumePDF" data={resume} type="application/pdf">
        <p>Alternative text - include a link <a href={resume}>to the PDF!</a></p>
      </object>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h2 className="contactHead">
        Want to Connect?
      </h2>
      <h3 className="contactMe"> sefang@seas.upenn.edu
      </h3>
    </div>
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