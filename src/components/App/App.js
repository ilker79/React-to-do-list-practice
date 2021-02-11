import React, { useState } from "react";
import "./App.css";
import Input from "../Input/index";
import List from "../List/index";
// import ListItems from "../List/ListItems/index";

let myList = ["Wear a mask", "Wash your hands", "Stay home"];

function App() {
  const [list, setList] = useState(myList);

  function addToList(text) {
    const changedList = [...list, text];
    setList(changedList);
    console.log(list);
  }

  function deleteItem(index) {  // list in scope, but used 2x (shadowed)
    const updatedList = [...list.slice(0, index), ...list.slice(index+1)];
    setList(updatedList);
    console.log(list);
  }

  return (
    <div className="App"> 
      <Input addToList={addToList} /> 
      <List myList={myList} deleteItem={deleteItem} />
      {/* <ListItems myList={myList} deleteItem={deleteItem} /> */}
    </div>
  );
}

export default App;
