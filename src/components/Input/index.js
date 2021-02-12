import React from "react";

function Input({ getText, addButton }) {
  return (
    <div>
      <input onChange={getText} />
      <button onClick={addButton}>Add To List</button>
    </div>
  );
}

export default Input;
