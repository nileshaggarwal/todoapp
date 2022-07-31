import React, { useState, useEffect } from "react";
import AddToList from "./Components/AddToList";
import DeleteButton from "./Components/DeleteButton";

const MainScreen = () => {
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("to_do"))
      ? JSON.parse(localStorage.getItem("to_do"))
      : []
  );

  const addToDoToList = async (todo) => {
    await setTodolist((prevtodo) => {
      return [...prevtodo, todo];
    });
  };

  const removeToDoFromList = (index) => {
    console.log(index);
    var tempToDoList = todolist;
    tempToDoList = tempToDoList.filter((x, inde) => inde !== index);
    setTodolist(tempToDoList);
  };

  useEffect(() => {
    localStorage.setItem("to_do", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div>
      <AddToList addToDoToList={addToDoToList} />
      <div>
        {todolist.length > 0 ? (
          <ul>
            {todolist.map((listitem, index) => {
              return (
                <li key={index}>
                  {listitem}{" "}
                  <DeleteButton
                    removeToDoFromList={removeToDoFromList}
                    index={index}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Your list is empty.Add an TASK TO DO.</p>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
