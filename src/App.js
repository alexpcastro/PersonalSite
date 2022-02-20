import "./styles.css";
import { Component, useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Blink from "react-blink-text";
import Clock from "react-clock";
import AnalogClock from "react-live-clock";
import moment from "moment";
import "react-clock/dist/Clock.css";
import BackButton from "./components/BackButton";

export default function App() {
  const [content, setContent] = useState(false);
  const [value, setValue] = useState(new Date());

  const handleBackButtonClick = () => setContent(false);

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let asciiSignature = (
    <pre className="asciiArt">
      &nbsp;                ,-.----.                <br/>
      &nbsp;   ,---,        \    /  \     ,----..   <br/>
      &nbsp;  '  .' \       |   :    \   /   /   \  <br/>
      &nbsp; /  ;    '.     |   |  .\ : |   :     : <br/>
      &nbsp;:  :       \    .   :  |: | .   |  ;. / <br/>
      &nbsp;:  |   /\   \   |   |   \ : .   ; /--`  <br/>
      &nbsp;|  :  ' ;.   :  |   : .   / ;   | ;     <br/>
      &nbsp;|  |  ;/  \   \ ;   | |`-'  |   : |     <br/>
      &nbsp;'  :  | \  \ ,' |   | ;     .   | '___  <br/>
      &nbsp;|  |  '  '--'   :   ' |     '   ; : .'| <br/>
      &nbsp;|  :  :         :   : :     '   | '/  : <br/>
      &nbsp;|  | ,'         |   | :     |   :    /  <br/>
      &nbsp;`--''           `---'.|      \   \ .'   <br/>
      &nbsp;                  `---`       `---`     <br/>
      <br />
    </pre>
  );

  let asciiEinstein = (
    <pre className="asciiArt">
      &nbsp;      -''--. <br/>
      &nbsp;      _`>   `\.-'_ <br/>
      &nbsp;   _.'     _     '._ <br/>
      &nbsp; .'   _.='   '=._   '. <br/>
      &nbsp; \_   / /_\ /_\ \   _/ <br/>
      &nbsp;   / (  \o/\\o/  ) \ <br/>
      &nbsp;   \._\ .-,_)-. /_./ <br/>
      &nbsp;       /__/ \__\ <br/>
      &nbsp;         '---' <br/>
      </pre>
  )

  const aboutContent = (
    <div>
      <h2>
        About Me
        <Blink fontSize="inherit" color="#222" text="_">
          _
        </Blink>
      </h2>
      <p>
        I'm an experienced software engineer, recently graduated from the MS in
        Computer Science program at Fordham.
      </p>
      <p>
        My key interests are data-intensive web development and user interface
        development.
      </p>
      <p>
        You'll usually find me drinking coffee and building websites (like this
        one).
      </p>
      <p>
        I focus on driving meaningful business impact by looking at problems
        through an operational lens.
      </p>
      <p>
        U.S. Citizen, proud Hispanic, and native English and Spanish speaker.
      </p>
      <div class="d-flex align-items-center">
        <img src="https://flagcdn.com/us.svg" height="20" alt="United States" />
        +
        <img src="https://flagcdn.com/es.svg" height="20" alt="Spain" />
      </div>
      {asciiSignature}
    </div>
  );

  const skillContent = (
    <div>
      <h2>
        Skills
        <Blink fontSize="inherit" color="#222" text="_">
          _
        </Blink>
      </h2>
      <p>Experienced across the full stack of web development.</p>
      <div class="titleBox">
        <h3>Front End</h3>
        <ul class="skillsList">
          <li>JavaScript</li>
          <li>AJAX </li>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>DOM</li>
          <li>Accessibility</li>
          <li>Material-UI</li>
          <li>Bootstrap</li>
          <li>WordPress</li>
        </ul>
      </div>
      <div class="titleBox">
        <h3>Back End</h3>
        <ul class="skillsList">
          <li>Python</li>
          <li>PHP</li>
          <li>Node.js</li>
          <li>Flask</li>
          <li>RESTful APIs</li>
          <li>JSON</li>
          <li>Relational DB</li>
          <li>Apache</li>
          <li>cURL</li>
          <li>SSH/Server management</li>
          <li>SSL</li>
        </ul>
      </div>
      <div class="titleBox">
        <h3>Database</h3>
        <ul class="skillsList">
          <li>SQL</li>
          <li>MySQL</li>
          <li>GraphQL</li>
          <li>SQLite</li>
          <li>MySQLWorkbench</li>
        </ul>
      </div>
      <div class="titleBox">
        <h3>Software Development Life Cycle</h3>
        <ul class="skillsList">
          <li>
            Design, development, and implementation techniques leading to the
            construction of reliable, efficient, and cost-effective software
          </li>
          <li>
            Analysis of software requirements, software design, testing
            procedures, software development tools, and management
            considerations.
          </li>
        </ul>
      </div>
    </div>
  );
  const projectContent = (
    <div>
      <h2>
        Projects
        <Blink fontSize="inherit" color="#222" text="_">
          _
        </Blink>
      </h2>
      <p>Explore some of the things I've built. View them all on GitHub.</p>

      <div class="titleBox skillsBox">
        <h3>Recruitment App</h3>
        <div class="description">
          <span>Fordham University, Capstone Project</span>
          <span class="date">2021</span>
        </div>
        <ul>
          <li>
            Web app built with React, Node.js, JavaScript, Material-UI, Python,
            Flask, Apollo, SQLite, JWT sessions, and GraphQL
          </li>
        </ul>
        <a href="https://github.com/RecruitmentPlatform">View on GitHub</a>
      </div>

      <div class="titleBox skillsBox">
        <h3>Sudoku Game Generator</h3>
        <div class="description">
          <span>Fordham University, Software Development</span>
          <span class="date">2021</span>
        </div>
        <ul>
          <li>Generate a Sudoku puzzle of a given difficulty in C++.</li>
        </ul>
        <a href="https://github.com/alexpcastro/Sudoku-Game-Generator/blob/main/gameGenerator.cpp">
          View on Github
        </a>
      </div>

      <div class="titleBox skillsBox">
        <h3>United Nations Scraper</h3>
        <div class="description">
          <span>Personal</span>
          <span class="date">2021</span>
        </div>
        <ul>
          <li>Pull United Nations data, format, and save to file.</li>
          <li>Web scraper built in Python3 using BeautifulSoup</li>
        </ul>
        <a href="https://github.com/alexpcastro/UN-Member-States-Scraper">
          View on GitHub
        </a>
      </div>

      <div class="titleBox skillsBox">
        <h3>N-Queens Solution</h3>
        <div class="description">
          <span>Fordham University, Artificial Intelligence</span>
          <span class="date">2020</span>
        </div>
        <ul>
          <li>A solution to the N-Queens problem using local search.</li>
        </ul>
        <a href="https://github.com/alexpcastro/N-Queens-Local-Search/blob/main/nqueens.py">
          View on GitHub
        </a>
      </div>

      <div class="titleBox skillsBox">
        <h3>A* Search Algorithm</h3>
        <div class="description">
          <span>Fordham University, Artificial Intelligence</span>
          <span class="date">2020</span>
        </div>
        <ul>
          <li>
            Comparing multiple heuristical approaches to a route planning
            problem using an A* search algorithm.
          </li>
        </ul>
        <a href="https://github.com/alexpcastro/A-Star-Search-Algorithm">
          View on GitHub
        </a>
      </div>

      <div class="titleBox skillsBox">
        <h3>
          <i>K</i>-Means Pixel Clustering
        </h3>
        <div class="description">
          <span>Fordham University, Data Mining</span>
          <span class="date">2020</span>
        </div>
        <ul>
          <li>
            Given any image, partitions pixels into clusters using <i>k</i>
            -means vector quantization.
          </li>
        </ul>
        <a href="https://github.com/alexpcastro/A-Star-Search-Algorithm">
          View on GitHub
        </a>
      </div>

      <div class="titleBox skillsBox">
        <h3>Ensemble Method Modelling</h3>
        <div class="description">
          <span>Fordham University, Data Mining</span>
          <span class="date">2020</span>
        </div>
        <ul>
          <li>
            Given any image, partitions pixels into clusters using <i>k</i>
            -means vector quantization.
          </li>
        </ul>
        <a href="https://github.com/alexpcastro/Ensemble-Method">
          View on Github
        </a>
      </div>

      <div class="titleBox skillsBox">
        <h3>Edgar Agents</h3>
        <div class="description">
          <span>Pure Digital, Client Project</span>
          <span class="date">2016</span>
        </div>
        <ul>
          <li>Design and development of custom WordPress website.</li>
        </ul>
        <a href="https://edgaragents.com">View EdgarAgents.com</a>
      </div>

      <div class="titleBox skillsBox">
        <h3>The Tax Zone</h3>
        <div class="description">
          <span>Pure Digital, Client Project</span>
          <span class="date">2016</span>
        </div>
        <ul>
          <li>Design and development of custom WordPress website.</li>
        </ul>
        <a href="https://thetaxzone.com">View TheTaxZone.com</a>
      </div>
    </div>
  );
  const eduContent = (
    <div>
      <h2>
        Education
        <Blink fontSize="inherit" color="#222" text="_">
          _
        </Blink>
      </h2>
      <div class="titleBox">
        <h3>Fordham University</h3>
        <div class="description">
          <span>MS in Computer Science</span>
          <span class="date">
            <abbr title="Graduated">Grad.</abbr> Fall 2022
          </span>
        </div>
        <ul>
          <li>
            Machine learning, data modeling, data preparation, classification,
            regression, clustering, association rules mining, and visualization.
          </li>
          <li>
            Authored blockchain paper pending publication, co-authors Dr.
            Mohamed Rahouti (Fordham) and Dr. Moussa Ayyash (Chicago State)
          </li>
        </ul>
      </div>
      <div class="titleBox">
        <h3>Fordham University</h3>
        <div class="description">
          <span>BS in Computer Science</span>
          <span class="date">
            <abbr title="Graduated">Grad.</abbr> Spring 2017
          </span>
        </div>
        <ul>
          <li>American Studies Honors Program</li>
          <li>Sigma Xi Nominee</li>
        </ul>
      </div>
      <div class="titleBox">
        <h3>Esade - Ramon Llull University</h3>
        <div class="description">
          <span>College Courses</span>
          <span class="date">Summer 2014</span>
        </div>
      </div>
      <div class="titleBox">
        <h3>Unversity of Oxford</h3>
        <div class="description">
          <span>IB&reg; Courses</span>
          <span class="date">Winter 2013</span>
        </div>
      </div>
      <div class="titleBox">
        <h3>American School of Barcelona</h3>
        <div class="description">
          <span>High School</span>
          <span class="date">
            <abbr title="Graduated">Grad.</abbr> Spring 2013
          </span>
        </div>
        <ul>
          <li>International Baccalaureate&reg; (IB) Diploma</li>
          <li>American High School Diploma</li>
        </ul>
      </div>
    </div>
  );
  const expContent = (
    <div>
      <h2>
        My Experience
        <Blink fontSize="inherit" color="#222" text="_">
          _
        </Blink>
      </h2>
      <p>Explore where I've worked and grown.</p>
      <div>
        <div class="titleBox">
          <h3>APC Technology Group, Inc.</h3>
          <div class="description">
            <span>Founder, Lead Developer</span>
            <span class="date">2009 - Present</span>
          </div>
          <ul>
            <li>
              Sold web, voice, and game server hosting to over 800 clients on a
              cluster of Linux and Windows dedicated servers in IBM datacenters.
            </li>
            <li>
              Pitched, closed, and developed webpages for clients including
              Pedro Pierluisi (Governor of PR), Amigo.com (Walmart),
              liftefoils.com, ColumbiaHeights.co, Lavanderiapr.com,
              node-living.com, EmpireCapitalHoldings.com, VCPRE.com
            </li>
            <li>
              Grew personal network of websites to over 10 million unique
              visitors, currently hosted on Google Cloud, including
              Minecraft-Seeds.net
            </li>
          </ul>
        </div>
        <div class="titleBox">
          <h3>BROKR.com LLC</h3>
          <div class="description">
            <span>Co-Owner, CTO</span>
            <span class="date">March 2017 - March 2020</span>
          </div>
          <ul>
            <li>
              Developed and owned high-quality code across all levels of the
              stack from investigation to implementation to testing to release
            </li>
            <li>
              Built and operated robust and performant CRM, driving $1.5M in
              monthly rental leads and managing business operations, built using
              HTML, PHP, MySQL, JavaScript, JQuery, JSON, XML, and RESTful API
              integrations. Designed relational database with >1M datapoints.
            </li>
            <li>
              Translated designs and wireframes into high-quality code and
              pixel-perfect, reliable, and trustworthy UIs on web and mobile
              interfaces
            </li>
            <li>
              Application and API optimization and testing to improve response
              times and stability using Postman, JMeter
            </li>
            <li>
              Designed and built back-end systems, services, and tools to
              consume HTTP APIs, access databases, process data, and format
              output
            </li>
          </ul>
        </div>
        <div class="titleBox">
          <h3>Pure Digital</h3>
          <div class="description">
            <span>Account Manager, Lead Developer</span>
            <span class="date">April 2015 – March 2017</span>
          </div>
          <ul>
            <li>
              Joined as employee #4 and participated in growth to 16 full-time
              in-house employees, lead of SEO and software development projects.
            </li>
            <li>
              Pitched, closed, and developed SEO campaigns, new webpages, and
              scripts with PHP, SQL, HTML, CSS, and JavaScript for standalone,
              WordPress, Magento, and Shopify pages: Guardian Life Insurance,
              First American Corporation, EdgarAgents, PetWellbeing, Sextoy.com
            </li>
            <li>
              Built, tested, shipped, and iterated on webpage improvements to
              increase client acquisitions, conversions, retention, and lower
              costs.
            </li>
            <li>
              Lead SEO department of 3, performed deep audits of website code
              and organic search behavior to grow client search market share
            </li>
          </ul>
        </div>
      </div>
      <figure>
        {asciiEinstein}
        <blockquote>The only source of knowledge is experience.</blockquote>
        <figcaption>-Albert Einstein</figcaption>
      </figure>
    </div>
  );
  const contactContent = (
    <div>
      <h2>Get in Touch
          <Blink fontSize="inherit" color="#222" text="_">
            _
          </Blink></h2>
      <p>Let's discuss new opportunities.</p>
    </div>
  );

  const homeContent = (
    <div>
      <h2>
        Welcome to my portfolio
        <Blink fontSize="inherit" color="#222" text="_">
          _
        </Blink>
      </h2>
      <p>
        I'm <span className="fw-bold">Alex Castro</span>, a software engineer
        living in New York City.
      </p>
      <p>What are you looking for?</p>
      <ul id="nav">
        <li>
          <button onClick={() => setContent(aboutContent)}>About</button>
        </li>
        <li>
          <button onClick={() => setContent(skillContent)}>Skills</button>
        </li>
        <li>
          <button onClick={() => setContent(projectContent)}>Projects</button>
        </li>
        <li>
          <button onClick={() => setContent(expContent)}>Experience</button>
        </li>
        <li>
          <button onClick={() => setContent(eduContent)}>Education</button>
        </li>
        <li>
          <button onClick={() => setContent(contactContent)}>
            Get in Touch
          </button>
        </li>
      </ul>
    </div>
  );
  /*let backButton = (
    <button className="backButton" onClick={() => setContent()}>
      &lsaquo;Go back
    </button>
  );*/
  let title = "<AlexCastro/>";
  
  return (
    <div id="app">
      <div id="header">
        <h1 class="highlighted">{title}</h1>
        <span id="time">
          <Clock
            hourHandWidth="1"
            minuteHandWidth="1"
            renderSecondHand="false"
            secondHandLength="75"
            size="15"
            value={value}
          />
          <AnalogClock className="analogClock" date={value} />
        </span>
        {moment().format("ddd D MMM YYYY")}
      </div>
      <div id="body">
        <div>
          {content ? <BackButton onClick={ () => setContent() } /> : ""}
          {content ? content : homeContent}
          <p class="text-center">Site built with React</p>
        </div>
      </div>
      <div id="footer">&copy; 2022 Alex Castro</div>
    </div>
  );
}
