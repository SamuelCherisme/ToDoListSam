import React, { useState } from "react";
import ToDoList from "./Components/ToDoList/ToDoList";
import CompletedList from "./Components/CompletedToDoList/CompletedToDoList";
import Form from "./Components/Form/Form";
import toDoListData from "./data";

import "./styles.css";

export default function App() {
  const [toDoitems, updateToDoItems] = useState(toDoListData);
  const [completedItems, updateCompleted] = useState([]);
  const addToCompleted = (item) => {
    const newArray = [item, ...completedItems];
    updateCompleted(newArray);
  };

  const handleSubmit = (item) => {
    updateToDoItems([{ title: item }, ...toDoitems]);
  };

  return (
    <div className="App">
      <h1>My to do list:</h1>
      <Form handleSubmit={handleSubmit} />
      <ToDoList toDoitems={toDoitems} addToCompleted={addToCompleted} />
      <CompletedList completedItems={completedItems} />
    </div>
  );
}
