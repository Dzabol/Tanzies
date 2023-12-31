import React from "react";

export default function Die(props) {
  const style = `die ${props.properties.isActive ? "die-active" : ""}`;
  const dieValue = props.properties.value;
  const dieName = `Dice${dieValue}`;
  const imageSrc = `/src/images/dice/${dieName}.png`;
  console.log(imageSrc);

  return (
    <div className={style} onClick={props.clickHandler}>
      <img
        src={imageSrc}
        className="die-image"
        alt={`Die with number ${dieValue}`}
      />
    </div>
  );
}
