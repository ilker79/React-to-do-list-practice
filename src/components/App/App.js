import React, { useState } from "react";
import "./App.css";
import Input from "../Input/index";
import List from "../List/Index";
// import ListItems from "../List/ListItems/index";

let myList = ["Wear a mask", "Wash your hands", "Stay home"];

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(myList);

  function getText(e) {
    let textValue = e.target.value;
    setText(textValue);
  }

  function addToList() {
    let addItemToList = [...list, text];
    setList(addItemToList);
    console.log(addItemToList);
  }

  function setLst(item) {
    return setList(item);
  }

  return (
    <div>
      <Input getText={getText} addButton={addToList} />
      <List list={list} setLst={setLst} />
    </div>
  );
}

export default App;
