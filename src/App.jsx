import { React, useState, useEffect } from "react";
import Die from "./components/Die";
import ScoreBoard from "./components/ScoreBoard";
import PlayButton from "./components/PlayButton";

function App() {
  const numberOfDicesInTheGame = 10;
  const [dice, setDice] = useState(
    generateAllNewNumbers(numberOfDicesInTheGame)
  );
  const [isFinished, updateState] = useState(false);
  const [bestScore, updateBestScore] = useState(0);
  const [moves, updateMoves] = useState(0);

  function generateAllNewNumbers(numberOfDices) {
    const diceArray = [];

    for (let i = 0; i < numberOfDices; i++) {
      diceArray.push(generateNewDie());
    }
    return diceArray;
  }

  function generateNewDie() {
    return {
      id: crypto.randomUUID(),
      value: generateRandomNumber(),
      isActive: false,
    };
  }

  function generateRandomNumber() {
    const maxValue = 6;
    return Math.ceil(Math.random() * maxValue);
  }

  function toogle(id) {
    setDice(
      dice.map((oldDice) => {
        return oldDice.id === id
          ? { ...oldDice, isActive: !oldDice.isActive }
          : oldDice;
      })
    );
  }

  function rollDice() {
    setDice(
      dice.map((currentDice) => {
        return currentDice.isActive !== true ? generateNewDie() : currentDice;
      })
    );
    //Update number of moves
    if (!isFinished) {
      updateMoves((oldValue) => oldValue + 1);
    }
  }

  useEffect(() => {
    const isAllHeld = dice.every((die) => die.isActive);
    const firstValue = dice[0].value;
    const isAllHaveTheSameValue = dice.every((die) => firstValue === die.value);

    if (isAllHeld & isAllHaveTheSameValue) {
      endGame();
    }
  }, [dice]);

  function endGame() {
    updateState(true);
    if (bestScore > moves || bestScore === 0) {
      updateBestScore(moves);
    }
    updateMoves(0);
    console.log("koniec");
  }

  const diceElements = dice.map((dice) => (
    <Die key={dice.id} properties={dice} clickHandler={() => toogle(dice.id)} />
  ));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="die-container">{diceElements}</div>
      <PlayButton gameStatus={isFinished} roll={() => rollDice()} />
      <ScoreBoard bestScore={bestScore} currentMoves={moves} />
    </main>
  );
}

export default App;
