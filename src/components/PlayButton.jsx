import React from "react";

export default function PlayButton(props) {
  const buttonText = props.isFinished ? "Start Game" : "Roll";
  const functionToRun = !props.isFinished ? props.roll : props.roll;

  return <button onClick={functionToRun}> {buttonText} </button>;
}
