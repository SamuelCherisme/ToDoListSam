import React from "react";
import ToDoListItem from "../ToDoListItems/ToDoListItems";

const ToDoList = ({ toDoitems, addToCompleted }) => {
  return (
    <>
      <h2> To Do Items: </h2>
      <ul>
        {toDoitems.map((item, index) => (
          <ToDoListItem
            key={index}
            content={item.title}
            addToCompleted={addToCompleted}
          />
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
