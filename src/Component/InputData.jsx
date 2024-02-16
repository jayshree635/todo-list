import React, { useState } from "react";
import "./InputData.css";

const InputData = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleTask = (e) => {
    e.preventDefault();

    if (task === "") {
      alert("Please enter a task");
      return;
    }
    addTask(task);
    setTask("");
  };

  return (
    <form className="inputfield">
      <input
        type="text"
        placeholder="Add Item"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleTask}>+</button>
    </form>
  );
};

export default InputData;
