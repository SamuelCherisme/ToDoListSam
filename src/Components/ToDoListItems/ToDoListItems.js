import React from "react";

const ToDoListItems = (props) => {
  return (
    <li onClick={() => props.addToCompleted(props.content)}>
      {props.content}
      <button>completed</button>
    </li>
  );
};

export default ToDoListItems;
