import React, {useState} from "react";
import "./App.css";
import Input from "../Input/index.js"
import List from "../List/index.js"
import ListItems from "../List/ListItems/index.js"


let myList = ["Wear a mask", "Wash your hands", "Stay home"];

function App() {
    const [text, setText ] = useState("");
    const [ , setList] = useState(myList)

    function updateText(event) {
        setText(event.target.value);
    }

    function addToList(text){
        let changedList = [...myList, text];
        setList(changedList);
    }

    return (
        <div className="App">
            <Input updateText={updateText} />
            <List addToList={addToList} text={text} />
            <ListItems myList={myList} />
        </div>


    );

}

export default App;