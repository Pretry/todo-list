import React, { useContext } from "react";
import "./TaskSummaryByType.css";
import TaskContext from "../store/task-context";

const TaskSummaryByType = (props) => {
  const ctxTask = useContext(TaskContext);

  let other = 0;
  let personal = 0;
  let work = 0;
  let shopping = 0;

  for (let i = 0; i < ctxTask.taskList.length; i++) {
    if (ctxTask.taskList[i].type === "Other") other++;
    else if (ctxTask.taskList[i].type === "Personal") personal++;
    else if (ctxTask.taskList[i].type === "Work") work++;
    else shopping++;
  }

  return (
    <div className="task-summary-by-type">
      <span style={{ backgroundColor: props.backgroundColor }}>
        {props.type === "Other" && `${props.type} : ${other} task(s) remaining`}
        {props.type === "Personal" &&
          `${props.type} : ${personal} task(s) remaining`}
        {props.type === "Work" && `${props.type} : ${work} task(s) remaining`}
        {props.type === "Shopping" &&
          `${props.type} : ${shopping} task(s) remaining`}
      </span>
    </div>
  );
};

export default TaskSummaryByType;
