import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import InputData from "./Component/InputData";
import TaskList from "./Component/TaskItem";
import "./App.css";

const App = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("todo-list");
    setListData(JSON.parse(storedData) || []);
  }, []);

  const addTask = (task) => {
    const newTask = { id: uuidv4(), task };
    const newData = [...listData, newTask];

    setListData(newData);
    localStorage.setItem("todo-list", JSON.stringify(newData));
  };

  const deleteTask = (deleteTasks) => {
    const updatedListData = listData.filter(
      (task) => task.task !== deleteTasks
    );
    localStorage.setItem("todo-list", JSON.stringify(updatedListData));
    setListData(updatedListData);
  };

  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <InputData addTask={addTask} />
        <TaskList listData={listData} deleteTask={deleteTask} />
      </div>
    </>
  );
};

export default App;
