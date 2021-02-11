import React, { useState } from "react";


function Input({ addToList }) {
  const [text, setText] = useState("");
  return (
    <div className="input">
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => addToList(text)}>Add to List</button>
    </div>
  );
}

export default Input;
