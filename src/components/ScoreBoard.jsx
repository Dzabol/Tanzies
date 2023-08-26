import React from "react";

export default function ScoreBoard(props) {
  return (
    <div className="score-container">
      {props.bestScore !== 0 && <h3>Your Best Score: {props.bestScore}</h3>}
      {props.currentMoves !== 0 && (
        <h3>Current number of moves: {props.currentMoves}</h3>
      )}
    </div>
  );
}
