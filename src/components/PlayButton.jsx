import React from "react";

export default function PlayButton(props) {
  const buttonText = props.gameStatus ? "Start New Game" : "Roll";
  const functionToRun = props.gameStatus ? props.newGame : props.roll;

  return <button onClick={functionToRun}> {buttonText} </button>;
}
