import { useState, useEffect } from "react";

const LiveClock = ({ format = "HH:mm:ss" }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    // Simple formatter (HH:mm:ss by default)
    return date
      .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
      .replace(/AM|PM/, "")
      .trim();
  };

  return <span>{formatTime(time)}</span>;
};

export default LiveClock;