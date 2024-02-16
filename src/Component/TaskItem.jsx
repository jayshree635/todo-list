import React from "react";
import { MdDeleteSweep } from "react-icons/md";
import "./TaskItem.css";

const TaskList = ({  listData, deleteTask }) => {
  return (
    <ul className="list-item">
      {listData.map((item) => (
        <li key={item.id} className="items">
          <div className="items-text">
            <p>{item.task}</p>
            <button className="btn">
              <MdDeleteSweep
                className="delete-icon"
                onClick={() => deleteTask(item.task)}
              />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
