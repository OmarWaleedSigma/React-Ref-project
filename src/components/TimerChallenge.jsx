import { useState,useRef } from "react";


export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const timer= useRef(null)
  const handleStartTimer = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };
  const handleStopTimer = () => {
    clearTimeout(timer.current);
    setTimerStarted(false);
    setTimerExpired(false);
  };
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p className="lose">You lose!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 && "s"}
      </p>
      <p>
        <button onClick={timerStarted ? handleStopTimer : handleStartTimer}>
          {timerStarted ? "stop" : "start"} challenge
        </button>
      </p>
      <p>
        {timerStarted && !timerExpired
          ? "time is running..."
          : "timer inactive"}
      </p>
    </section>
  );
}
