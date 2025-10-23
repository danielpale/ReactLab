import { useEffect, useRef, useState } from "react";
import classes from "./TodoList.module.css";
import BaseBtn from "../base/BaseBtn";
import TodoListItem from "./TodoListItem";

export default function TodoList({
  tasks = [],
  hideAdd = false,
  onAddTask,
  onDeleteTask,
  onCompleteTask,
  onDecompleteTask,
  onUpdateTask,
}) {
  const [creating, setCreating] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (creating) {
      inputRef.current.focus();
    }
  }, [creating]);

  function handleCreateTask() {
    setCreating(true);
  }
  function handleCancelCreateTask() {
    setCreating(false);
  }
  function handleAddTask() {
    const title = inputRef.current.value;
    if (title === "") return;
    onAddTask(title);
    handleCancelCreateTask();
  }

  return (
    <div className={classes["todo-list"]}>
      {tasks.map((task) => (
        <TodoListItem
          key={task.id}
          {...task}
          onDelete={onDeleteTask}
          onComplete={onCompleteTask}
          onDecomplete={onDecompleteTask}
          onUpdate={onUpdateTask}
        />
      ))}
      {!hideAdd && (
        <>
          {!creating ? (
            <div
              className={classes["todo-list-creation-item"]}
              onClick={handleCreateTask}
            >
              <p> Añadir tarea </p>
            </div>
          ) : (
            <div className={classes["todo-list__form"]}>
              <input
                className={classes["todo-list__input"]}
                placeholder="Escribe la tarea aquí"
                ref={inputRef}
              />
              <BaseBtn type="secondary" onClick={handleCancelCreateTask}>
                Cancelar
              </BaseBtn>
              <BaseBtn onClick={handleAddTask}>Añadir</BaseBtn>
            </div>
          )}
        </>
      )}
    </div>
  );
}
