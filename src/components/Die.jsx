import React from "react";

export default function Die(props) {
  const style = `die ${props.properties.isActive ? "die-active" : ""}`;
  const dieValue = props.properties.value;
  const dieName = `dice${dieValue}`;
  const imageSrc = `../images/${dieName}.PNG`;
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
