import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
  {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    isDone: false
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    isDone: false
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    isDone: false
  },
];


function ToDoList() {
  return (
    <div>
      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task}  toggleTask={toggleTaskDone} /> )}
      </div>
    </div>
  );
}

export default ToDoList;
