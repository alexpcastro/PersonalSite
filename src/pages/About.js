

import TerminalType from "../components/TerminalType";
import "../styles.css";

export default function About() {
  return (
    <div className="page-container">
      <TerminalType typedText="About Me" hideCursorOnFinish />
      <div className="fade-in" style={{ animationDelay: "0.3s" }}>
        <p>
          I'm an accomplished software engineer with a BS and MS in Computer Science from Fordham University,
          where I completed dual specializations in Artificial Intelligence and Data Science.
        </p>
      </div>
      <div className="fade-in" style={{ animationDelay: "0.6s" }}>
        <p>
          Over the past decade, I have managed and led engineering teams across academia, startups, and enterprise,
          including overseeing a globally distributed team spanning four continents to deliver an enterprise-grade
          generative AI platform.
        </p>
      </div>
      <div className="fade-in" style={{ animationDelay: "0.9s" }}>
        <p>
          My work blends deep expertise in modern cloud infrastructure, AI systems, and web development with strong leadership
          skills. In my current role, I architect AI solutions, lead development teams, meet with executives at large-scale
          enterprises, and enable internal leadership teams to position and sell cutting-edge technology solutions.
        </p>
      </div>
      <div className="fade-in" style={{ animationDelay: "1.2s" }}>
        <p>
          My academic foundation provides a strong understanding of core computer science principles, including data structures and
          algorithms, systems design, theory of computation, database systems, distributed computing, and blockchain technologies.
        </p>
      </div>
      <div className="fade-in" style={{ animationDelay: "1.5s" }}>
        <p>
          I'm also the co-author of an IEEE-published paper introducing Screencoin, a blockchain-enabled decentralized ad network.
          Proud Hispanic, born in the United States and a U.S. citizen, fluent in English and Spanish, with an international background that includes attending high school in Barcelona.
        </p>
      </div>
      <div className="fade-in d-flex align-items-center" style={{ animationDelay: "1.8s", marginTop: "16px" }}>
        <img src="https://flagcdn.com/us.svg" height="20" alt="United States" /> +
        <img src="https://flagcdn.com/es.svg" height="20" alt="Spain" />
      </div>
    </div>
  );
}