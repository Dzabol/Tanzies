import React from "react";

export default function Die(props) {
  const style = `die ${props.properties.isActive ? "die-active" : ""}`;

  return (
    <div className={style} onClick={props.clickHandler}>
      <h2> {props.properties.value}</h2>
    </div>
  );
}
