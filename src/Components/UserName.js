import React, { useState } from "react";
import styles from "../App.module.css";

const UserName = (props) => {
  const [username, setUsername] = useState("");

  return (
    <div className={styles.usernamewrapper}>
      <h1>What should we call you</h1>
      <div>
        <input onChange={(e) => setUsername(e.target.value)} value={username} />
        <button
          disabled={username ? false : true}
          onClick={() => props.setUsername(username)}
        >
          Save...
        </button>
      </div>
      <span>Hello {username}!</span>
    </div>
  );
};

export default UserName;
