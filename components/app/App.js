import React, {useState} from "react";
import "./App.css";



let myList = ["Wear a mask", "Wash your hands", "Stay home"];

function App() {
    const [text, setText ] = useState("");

    function updateText(event) {
        setText(event.target.value);
    }

    function addToList(text){
        let changedList = [...myItems, text];
        setList(changedList);


    }

    return (
        <div className="App">
            <Input updateText={updateText} />
            <Button addToList={addToList} text={text} />
            <List myItems={myItems} />
        </div>


    );

}

export default App;