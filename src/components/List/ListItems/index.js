import React from "react";
 

function ListItems({ text, deleteItems, index }) {
  return (
    <div>
      <p>{text}</p>  
      <button onClick={() => deleteItems(index)}> O </button>
        
    </div>
  );
}

export default ListItems;
