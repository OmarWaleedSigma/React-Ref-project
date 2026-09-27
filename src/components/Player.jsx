import { useState, useRef } from "react";

export default function Player() {
  const [submitedName, setSubmitedName] = useState("");
  const playerInput = useRef(null);
  function handleSubmitName() {
    setSubmitedName(playerInput.current.value);
    playerInput.current.value = "";
  }
  return (
    <section id="player">
      <h2>Player {submitedName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerInput}
          type="text"
        />
        <button onClick={handleSubmitName}>Set Name</button>
      </p>
    </section>
  );
}
