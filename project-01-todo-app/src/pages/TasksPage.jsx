import { useState } from "react";
import classes from "./TasksPage.module.css";
import BaseSection from "../components/base/BaseSection";
import BaseDivider from "../components/base/BaseDivider";
import TodoList from "../components/common/TodoList";

import { TasksContext } from "../store/TasksContext";

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);

  const incompleteTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  function onAddTask(title) {
    const newTask = {
      id: `${new Date()}`,
      title: title,
      creationDate: new Date(),
      completationDate: null,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  return (
    // <TasksContext>
    <div className={classes["task-page"]}>
      <BaseSection
        fullHeight
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <h6 className={`caption ff-text ${classes.title}`}>
          [Tareas Pendientes]
        </h6>
        <TodoList tasks={incompleteTasks} onAddTask={onAddTask} />
      </BaseSection>
      <BaseDivider />
      <BaseSection
        fullHeight
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <h6 className={`caption ff-text ${classes.title}`}>
          [Tareas Terminadas]
        </h6>
        <TodoList hideAdd tasks={completedTasks} />
      </BaseSection>
    </div>
    // </TasksContext>
  );
}
