import React from "react";
import "./Modal.css";
import { useState, useContext } from "react";
import TaskContext from "../store/task-context";

const Modal = (props) => {
  const [errorForm, setErrorForm] = useState("");
  const [taskName, setTaskName] = useState("");
  const [taskType, setTaskType] = useState("Other");

  const ctxTask = useContext(TaskContext);

  const createTask = (e) => {
    e.preventDefault();
    if (!taskName) {
      setErrorForm("Please insert a valid task name");
      return;
    } else {
      setErrorForm("");
    }

    const newTask = {
      title: taskName,
      type: taskType,
    };
    ctxTask.setTaskList([newTask, ...ctxTask.taskList]);
    props.onCloseModal();
  };

  const getTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const getTaskType = (e) => {
    setTaskType(e.target.value);
  };

  return (
    <div className="overlay">
      <div className="modal">
        <form onSubmit={createTask}>
          <label>Task name</label>
          {errorForm.length !== 0 ? (
            <>
              <input
                type="text"
                style={{ borderColor: "red", marginBottom: "3px" }}
                onChange={getTaskName}
                value={taskName}
              />
              <span
                style={{ color: "red", fontSize: "14px", marginBottom: "5px" }}
              >
                {errorForm}
              </span>
            </>
          ) : (
            <input type="text" onChange={getTaskName} value={taskName} />
          )}
          <label>Task type</label>
          <select
            name="type_tasks"
            defaultValue={taskType}
            onChange={getTaskType}
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>
          <div className="modal__buttons">
            <button onClick={props.onCloseModal} id="modal__close-button">
              Close
            </button>
            <button id="modal__add-button" type="submit">
              Add task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
