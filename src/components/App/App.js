import React, { useState } from "react";
import "./App.css";
import Input from "../Input/index";
import List from "../List/index";
import ListItems from "../List/ListItems/index";

let myList = ["Wear a mask", "Wash your hands", "Stay home"];

function App() {
  const [list, setList] = useState(myList);

  function addToList(text) {
    let changedList = [...list, text];
    setList(changedList);
    console.log(list);
  }

  function deleteItem(list, index) {
    let updatedList = [...list.slice(0, index), ...list.slice(index)];
    setList(updatedList);
  }

  return (
    <div className="App">
      <Input addToList={addToList} />
      <List myList={myList} />
      <ListItems myList={myList} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
