import React from "react";

const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: "red",
        outline: "none",
        padding: "10px",
        border: "none",
        color: "#fff",
        margin: "1rem",
      }}
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
