import React, { useState } from "react";
import "./App.css";
import Input from "../Input/index";
import List from "../List/index";

let toDoList = ["study", "sleep", "eat", "go for a walk"];

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState(toDoList);

  function getText(e) {
    let textValue = e.target.value;
    setText(textValue);
  }

  function addToList(){
    let addItemToList = [...list, text];
    setList(addItemToList);
    console.log(addItemToList);
  }

  function deleteItem(index){
    let itemDeletedList = [...list.slice(0, index), ...list.slice(index+1)];
    setList(itemDeletedList);
  }

  return (
    <div>
      <Input getText={getText} addButton={addToList}/>
      <List list={list} deleteButton={deleteItem}/>
    </div>
  );
}

export default App;
