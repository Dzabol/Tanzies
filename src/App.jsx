import { React, useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(generateNumbers(10));

  function generateNumbers(numberOfDices) {
    const diceArray = [];
    const maxValue = 6;

    for (let i = 0; i < numberOfDices; i++) {
      const randomNumber = Math.ceil(Math.random() * maxValue);
      diceArray.push({
        id: crypto.randomUUID(),
        value: randomNumber,
        isActive: false,
      });
    }
    return diceArray;
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
    setDice(generateNumbers(10));
  }

  const diceElements = dice.map((dice) => (
    <Die key={dice.id} properties={dice} clickHandler={() => toogle(dice.id)} />
  ));

  return (
    <main>
      <div className="die-container">{diceElements}</div>
      <button onClick={() => rollDice()}>Roll</button>
    </main>
  );
}

export default App;
