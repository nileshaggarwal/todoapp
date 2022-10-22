import React, { useState, useEffect } from "react";
import AddToList from "./Components/AddToList";
import DeleteButton from "./Components/DeleteButton";
import styles from "./App.module.css";
import UserName from "./Components/UserName";

const MainScreen = () => {
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("to_do"))
      ? JSON.parse(localStorage.getItem("to_do"))
      : []
  );
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem("user_name"))
      ? JSON.parse(localStorage.getItem("user_name"))
      : ""
  );

  const deleteName = () => {
    setUsername("");
    setTodolist([]);
    localStorage.removeItem("user_name");
    localStorage.removeItem("to_do");
  };

  const changename = (usernames) => {
    setUsername(usernames);
    localStorage.setItem("user_name", JSON.stringify(usernames));
  };

  const removeToDoFromList = (index) => {
    var tempToDoList = todolist;
    tempToDoList = tempToDoList.filter((x, inde) => inde !== index);
    setTodolist(tempToDoList);
  };

  useEffect(() => {
    localStorage.setItem("to_do", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className={styles.mainwrapper}>
      <h1>ToDo List</h1>
      {username ? (
        <div className={styles.interior}>
          <p>Hello {username}!</p>
          <span className={styles.spanadd} onClick={deleteName}>
            Change user?
          </span>
          <div className={styles.listwrapper}>
            <AddToList setTodolist={setTodolist} />

            <div className={styles.list}>
              {todolist.length > 0 ? (
                <ul>
                  {todolist.map((listitem, index) => {
                    return (
                      <li key={index}>
                        <div>
                          <span>{listitem}</span>
                          <DeleteButton
                            removeToDoFromList={removeToDoFromList}
                            index={index}
                          />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p>Your list is empty.Add an TASK TO DO.</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.interior}>
          <UserName setUsername={changename} />
        </div>
      )}
    </div>
  );
};

export default MainScreen;
