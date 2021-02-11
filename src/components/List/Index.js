import "./App.css";

function List({ myList }) {
  return (
    <div>
      {myList.map((item, index) => (
        <ul key={index}>{item}</ul>
      ))}
    </div>
  );
}

export default List;
