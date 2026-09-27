import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";
const CHALLENGES = [
  { title: "Challenge 1", targetTime: 1 },
  { title: "challenge 2", targetTime: 4 },
  { title: "Challenge 3", targetTime: 7 },
  { title: "Challenge 4", targetTime: 10 },
];
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        {CHALLENGES.map((challenge) => (
          <TimerChallenge key={challenge.title} {...challenge} />
        ))}
      </div>
    </>
  );
}

export default App;
