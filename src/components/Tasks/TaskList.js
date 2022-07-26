import React, { useContext } from "react";
import Container from "../UI/Container";
import "./TaskList.css";
import TaskItem from "./TaskItem";
import TaskContext from "../store/task-context";

const TaskList = (props) => {
  const ctxTask = useContext(TaskContext);

  const noTask = "Your todo list is empty for the day";
  return (
    <Container>
      {ctxTask.taskList.length === 0 ? (
        <span style={{ color: "white", fontWeight: "bold" }}>{noTask}</span>
      ) : (
        <ul>
          {ctxTask.taskList.map((task, i) => (
            <TaskItem task={task} index={i} />
          ))}
        </ul>
      )}
    </Container>
  );
};

export default TaskList;
