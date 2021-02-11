import "./App.css";

function Input({ addToList, text }) {
  return (
    <div className="input">
        <button onClick={() => addToList(text)}>Add to List</button>
    </div>
  );
}

export default Input;
