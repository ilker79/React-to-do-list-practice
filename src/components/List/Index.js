import React from "react";

function List({ myList }) {
  return (
    <div>
      <ul>
        {myList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
