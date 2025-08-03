import TerminalType from "../components/TerminalType";
import "../styles.css";

export default function Skills() {
  const skillSections = [
    { 
      title: "Front End", 
      skills: [
        "JavaScript", "AJAX", "React", "HTML5", "CSS3",
        "DOM", "Node.js", "Next.js", "Accessibility",
        "Material-UI", "Bootstrap", "WordPress"
      ] 
    },
    { 
      title: "Back End", 
      skills: [
        "Python", "Google Cloud (GCP)", "Firebase", "PHP",
        "Flask", "RESTful APIs", "JSON", "Relational DB",
        "Apache", "cURL", "SSH/Server management", "SSL"
      ] 
    },
    { 
      title: "Database", 
      skills: [
        "SQL", "MySQL", "GraphQL", "SQLite", "MySQLWorkbench"
      ] 
    },
    { 
      title: "Software Development Life Cycle", 
      skills: [
        "Design, development, and implementation techniques leading to the construction of reliable, efficient, and cost-effective software",
        "Analysis of software requirements, software design, testing procedures, software development tools, and management considerations."
      ] 
    }
  ];

  return (
    <div className="page-container">
      <TerminalType typedText="Skills" hideCursorOnFinish />
      {skillSections.map((section, i) => (
        <div 
          key={section.title} 
          className="titleBox fade-in" 
          style={{ animationDelay: `${(i + 1) * 0.3}s` }}
        >
          <h3>{section.title}</h3>
          <ul className="skillsList">
            {section.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}