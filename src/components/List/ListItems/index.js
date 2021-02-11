import React from "react";
 

function ListItems({ text, deleteItems, index }) {
  return (
    <div>
      <p>{text}</p>  
      <button onClick={() => deleteItems(index)}> O </button> 
        
    </div> //deleteItems used to have 2 parameters, text and index. Here button doesnt make sense, although it's now valid. 
  );
}

export default ListItems;

//delete this whole component? Now redundant. 
// nuke from orbit if so