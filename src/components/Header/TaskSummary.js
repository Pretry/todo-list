import React, { useContext } from "react";
import TaskContext from "../store/task-context";
import TaskSummaryByType from "./TaskSummaryByType";

const TaskSummary = () => {
  const ctxTask = useContext(TaskContext);
  return (
    <>
      <h3 style={{ color: "white", marginBottom: "10px" }}>
        You have{" "}
        <span style={{ color: "yellow" }}>{ctxTask.taskList.length}</span> on
        going tasks
      </h3>

      <div>
        <TaskSummaryByType type={"Other"} backgroundColor={"#94fca0"} />
        <TaskSummaryByType type={"Personal"} backgroundColor={"#FFBB98"} />
        <TaskSummaryByType type={"Work"} backgroundColor={"#FAE6B1"} />
        <TaskSummaryByType type={"Shopping"} backgroundColor={"#8CBDB9"} />
      </div>
    </>
  );
};

export default TaskSummary;
