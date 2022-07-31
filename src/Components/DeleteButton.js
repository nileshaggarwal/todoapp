import React from "react";

const DeleteButton = (props) => {
  return (
    <button onClick={() => props.removeToDoFromList(props.index)}>
      Delete!
    </button>
  );
};

export default DeleteButton;
