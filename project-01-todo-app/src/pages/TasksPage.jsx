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
      id: `${Date.now()}`,
      title: title,
      creationDate: new Date(),
      completationDate: null,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }
  function onDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function onCompleteTask(id) {
    const nextTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      } else {
        return task;
      }
    });
    setTasks(nextTasks);
  }
  function onDecompleteTask(id) {
    const nextTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: false };
      } else {
        return task;
      }
    });
    setTasks(nextTasks);
  }
  function onUpdateTask(id, newTitle) {
    const nextTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: newTitle };
      } else {
        return task;
      }
    });
    setTasks(nextTasks);
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
        <TodoList
          tasks={incompleteTasks}
          onAddTask={onAddTask}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
          onUpdateTask={onUpdateTask}
        />
      </BaseSection>
      <BaseDivider />
      <BaseSection
        fullHeight
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <h6 className={`caption ff-text ${classes.title}`}>
          [Tareas Terminadas]
        </h6>
        <TodoList
          hideAdd
          tasks={completedTasks}
          onDeleteTask={onDeleteTask}
          onDecompleteTask={onDecompleteTask}
        />
      </BaseSection>
    </div>
    // </TasksContext>
  );
}
