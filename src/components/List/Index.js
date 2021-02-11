import React from "react";
import ListItems from "../List/ListItems/index";

function List({ myList }) {
  return (
    <div>
      <ul>
        {myList.map((item, index) => (
          <li key={index}>{item}
             <button onClick={() => ListItems(index)}> O </button> 
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
