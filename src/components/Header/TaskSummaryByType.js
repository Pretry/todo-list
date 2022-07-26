import React, { useContext } from "react";
import "./TaskSummaryByType.css";
import TaskContext from "../store/task-context";

const TaskSummaryByType = (props) => {
  const ctxTask = useContext(TaskContext);

  let countType = ctxTask.taskList.filter(
    (task) => task.type === props.type
  ).length;

  return (
    <span style={{ backgroundColor: props.backgroundColor }}>
      {props.type} : {countType}
    </span>
  );
};

export default TaskSummaryByType;
