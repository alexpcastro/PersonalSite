import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./TerminalType.css";

const TerminalType = ({ 
  children, 
  interval = 1000, 
  color = "inherit", 
  fontSize = "16px", 
  typedText = "", 
  typingSpeed = 80,
  hideCursorOnFinish = false 
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (!typedText) return;
    setDisplayedText("");
    setTypingDone(false);
    let index = 0, timer;

    const type = () => {
      setDisplayedText(typedText.slice(0, ++index));
      if (index < typedText.length) {
        timer = setTimeout(type, typingSpeed);
      } else {
        setTypingDone(true);
      }
    };

    type();
    return () => clearTimeout(timer);
  }, [typedText, typingSpeed]);

  return (
    <span
      style={{
        color,
        fontSize,
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        maxWidth: "100%",
        display: "inline-block",
      }}
    >
      {typedText ? displayedText : children}
      {(!hideCursorOnFinish || !typingDone) && (
        <span className="blink" style={{ animationDuration: `${interval}ms` }}>_</span>
      )}
    </span>
  );
};

TerminalType.propTypes = {
  children: PropTypes.node,
  interval: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  typedText: PropTypes.string,
  typingSpeed: PropTypes.number,
  hideCursorOnFinish: PropTypes.bool
};

export default TerminalType;