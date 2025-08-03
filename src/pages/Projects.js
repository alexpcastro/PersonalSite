

import TerminalType from "../components/TerminalType";
import "../styles.css";

export default function Projects() {
  const projects = [
    {
      title: "Recruitment App",
      description: "Fordham University, Capstone Project",
      date: "2021",
      details: [
        "Web app built with React, Node.js, JavaScript, Material-UI, Python, Flask, Apollo, SQLite, JWT sessions, and GraphQL"
      ],
      link: "https://github.com/RecruitmentPlatform"
    },
    {
      title: "Sudoku Game Generator",
      description: "Fordham University, Software Development",
      date: "2021",
      details: ["Generate a Sudoku puzzle of a given difficulty in C++."],
      link: "https://github.com/alexpcastro/Sudoku-Game-Generator/blob/main/gameGenerator.cpp"
    },
    {
      title: "United Nations Scraper",
      description: "Personal",
      date: "2021",
      details: [
        "Pull United Nations data, format, and save to file.",
        "Web scraper built in Python3 using BeautifulSoup"
      ],
      link: "https://github.com/alexpcastro/UN-Member-States-Scraper"
    },
    {
      title: "N-Queens Solution",
      description: "Fordham University, Artificial Intelligence",
      date: "2020",
      details: ["A solution to the N-Queens problem using local search."],
      link: "https://github.com/alexpcastro/N-Queens-Local-Search/blob/main/nqueens.py"
    },
    {
      title: "A* Search Algorithm",
      description: "Fordham University, Artificial Intelligence",
      date: "2020",
      details: [
        "Comparing multiple heuristical approaches to a route planning problem using an A* search algorithm."
      ],
      link: "https://github.com/alexpcastro/A-Star-Search-Algorithm"
    },
    {
      title: "K-Means Pixel Clustering",
      description: "Fordham University, Data Mining",
      date: "2020",
      details: [
        "Given any image, partitions pixels into clusters using k-means vector quantization."
      ],
      link: "https://github.com/alexpcastro/A-Star-Search-Algorithm"
    },
    {
      title: "Ensemble Method Modelling",
      description: "Fordham University, Data Mining",
      date: "2020",
      details: [
        "Given any image, partitions pixels into clusters using k-means vector quantization."
      ],
      link: "https://github.com/alexpcastro/Ensemble-Method"
    },
    {
      title: "Edgar Agents",
      description: "Pure Digital, Client Project",
      date: "2016",
      details: ["Design and development of custom WordPress website."],
      link: "https://edgaragents.com"
    },
    {
      title: "The Tax Zone",
      description: "Pure Digital, Client Project",
      date: "2016",
      details: ["Design and development of custom WordPress website."],
      link: "https://thetaxzone.com"
    }
  ];

  return (
    <div className="page-container">
      <TerminalType typedText="Projects" hideCursorOnFinish />
      <p className="fade-in" style={{ animationDelay: "0.3s" }}>
        Explore some of the things I've built. View them all on GitHub.
      </p>
      {projects.map((proj, i) => (
        <div
          key={proj.title}
          className="titleBox skillsBox fade-in"
          style={{ animationDelay: `${(i + 2) * 0.3}s` }}
        >
          <h3>{proj.title}</h3>
          <div className="description">
            <span>{proj.description}</span>
            <span className="date">{proj.date}</span>
          </div>
          <ul>
            {proj.details.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
          <a href={proj.link} target="_blank" rel="noopener noreferrer">
            {proj.link.includes("github") ? "View on GitHub" : `View ${proj.title}`}
          </a>
        </div>
      ))}
    </div>
  );
}