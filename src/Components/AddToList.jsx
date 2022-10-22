import React, { useState } from "react";
import styles from "../App.module.css";

const AddToList = (props) => {
  const [todo, setTodo] = useState("");

  const addToDoToList = async (todo) => {
    await setTodo(" ");
    await props.setTodolist((prevtodo) => {
      return [...prevtodo, todo];
    });
  };

  return (
    <div className={styles.addtolistwrapper}>
      <input
        placeholder="What's remaining TO DO? Take a note"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={() => addToDoToList(todo)}>Add!</button>
    </div>
  );
};

export default AddToList;
