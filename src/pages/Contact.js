import TerminalType from "../components/TerminalType";
import "../styles.css";

export default function Contact() {
  return (
    <div className="page-container">
      <TerminalType typedText="Get in Touch" hideCursorOnFinish />
      <div className="fade-in" style={{ animationDelay: "0.3s" }}>
        <p>Let's discuss new opportunities or connect professionally.</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/alexpcastro"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/alexpcastro
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/alexpcastro"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/alexpcastro
          </a>
        </p>
      </div>
    </div>
  );
}