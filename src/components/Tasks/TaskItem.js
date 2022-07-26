import React, { useState, useContext } from "react";
import "./TaskItem.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskContext from "../store/task-context";

const TaskItem = (props) => {
  const [inputIsChecked, setInputIsChecked] = useState(false);

  const ctxTask = useContext(TaskContext);

  const setNewBackgroundColor = (type) => {
    let backgroundDefault = "#E09E50";
    if (type === "Work") {
      backgroundDefault = "#FAE6B1";
    } else if (type === "Personal") {
      backgroundDefault = "#FFBB98";
    } else if (type === "Shopping") {
      backgroundDefault = "#8CBDB9";
    } else if (type === "Other") {
      backgroundDefault = "#94fca0";
    } else {
      backgroundDefault = "#E09E50";
    }
    return backgroundDefault;
  };

  const deleteTask = (index) => {
    const newTaskList = ctxTask.taskList.filter((_, i) => i !== index);
    ctxTask.setTaskList(newTaskList);
  };

  return (
    <li
      className="task-item"
      style={{ backgroundColor: setNewBackgroundColor(props.task.type) }}
    >
      <label>
        <input
          type="checkbox"
          onChange={() => setInputIsChecked(!inputIsChecked)}
        />
        <h3 style={inputIsChecked ? { textDecoration: "line-through" } : {}}>
          [{props.task.type}] {props.task.title}
        </h3>
      </label>
      <FontAwesomeIcon
        icon={faTrash}
        style={{ cursor: "pointer" }}
        onClick={() => deleteTask(props.index)}
      />
    </li>
  );
};

export default TaskItem;
