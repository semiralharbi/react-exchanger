import { useState, useEffect } from "react";
import { StyledClock } from "./styled";

const formatDate = (date) => {
  return date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
  });
};

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <StyledClock>Dzisiaj jest: {formatDate(date)}</StyledClock>;
};
