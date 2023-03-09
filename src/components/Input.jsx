import React from "react";

const Input = (props) => {
  return (
    <>
      {" "}
      <input type="text" placeholder="Masukkan todo" value={props.value} onChange={props.handleChange} />{" "}
    </>
  );
};

export default Input;
