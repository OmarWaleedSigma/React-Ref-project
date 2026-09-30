import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
export default function ResultModal({
  remainingTime,
  targetTime,
  ref,
  onReset,
}) {
  const dialog = useRef(null);
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost!</h2>}
      {!userLost && <h2>Your Score {score}%</h2>}
      <p>
        the target time is <strong>{targetTime}</strong> seconds
      </p>
      <p>
        you stopped the timer at{" "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById("modal"),
  );
}
