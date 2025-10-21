import { useState } from "react";
import classes from "./TodoList.module.css";
import BaseBtn from "../base/BaseBtn";
import TodoListItem from "./TodoListItem";

export default function TodoList({ tasks = [], hideAdd = false }) {
  const [creating, setCreating] = useState(false);

  function handleAddTask() {
    setCreating(true);
  }

  function handleCancelCreateTask() {
    setCreating(false);
  }

  return (
    <div className={classes["todo-list"]}>
      {tasks.map((task) => (
        <TodoListItem key={task.id} {...task} />
      ))}
      {!hideAdd && (
        <>
          {!creating ? (
            <div
              className={classes["todo-list-creation-item"]}
              onClick={handleAddTask}
            >
              <p> Añadir tarea </p>
            </div>
          ) : (
            <div className={classes["todo-list__form"]}>
              <input placeholder="Escribe la tarea aquí" />
              <BaseBtn type="secondary" onClick={handleCancelCreateTask}>
                Cancelar
              </BaseBtn>
              <BaseBtn>Añadir</BaseBtn>
            </div>
          )}
        </>
      )}
    </div>
  );
}
