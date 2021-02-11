import React from "react";


function List({ deleteItem, myList }) { //accepts two props here
  return (
    <div>
      <ul>
        {myList.map((item, index) => (
          <li key={index}>{item}
             <button onClick={() => deleteItem(index)}> O </button> 
          </li>
        ))}
      </ul>
    </div>
  );


}

export default List;
