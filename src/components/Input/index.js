import React from "react";

function Input({ addToList, updateText}) {
  return (
    <div className="input">
      <input type="text" onChange={updateText} />
        <button onClick={addToList}>Add to List</button>
    </div>
  );
}

export default Input;
