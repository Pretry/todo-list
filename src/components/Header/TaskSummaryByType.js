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
    <span style={{ backgroundColor: props.backgroundColor }}>
      {props.type === "Other" && `${props.type} : ${other} `}
      {props.type === "Personal" && `${props.type} : ${personal}`}
      {props.type === "Work" && `${props.type} : ${work}`}
      {props.type === "Shopping" && `${props.type} : ${shopping}`}
    </span>
  );
};

export default TaskSummaryByType;
