import React from 'react';

function List({list, deleteButton}){
    return(
        <div>
            <ul>
                {list.map((item, index) =><li>{item}<button onClick={() => deleteButton(index)}>Delete</button></li>)}
            </ul>
        </div>
    );
}

export default List;