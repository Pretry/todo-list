import Header from "./components/Header/Header";
import TaskList from "./components/Tasks/TaskList";
import React, { useState } from "react";
import TaskContext from "./components/store/task-context";

const INITIAL_TASKS = [
  {
    title: "Prepare dinner for tonight",
    type: "Personal",
  },
  {
    title: "Get the powerpoint done",
    type: "Work",
  },
  {
    title: "Buy avocados and tomatos",
    type: "Shopping",
  },
  {
    title: "Work out",
    type: "Personal",
  },
];

function App() {
  const [taskList, setTaskList] = useState(INITIAL_TASKS);

  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      <Header />
      <main>
        <TaskList />
      </main>
    </TaskContext.Provider>
  );
}

export default App;
