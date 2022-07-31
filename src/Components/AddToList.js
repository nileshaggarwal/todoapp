import React, { useState } from "react";

const AddToList = (props) => {
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => props.addToDoToList(todo)}>Add!</button>
    </div>
  );
};

export default AddToList;
