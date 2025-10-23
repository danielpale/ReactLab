import { useEffect, useRef, useState } from "react";
import classes from "./TodoListItem.module.css";

export default function TodoListItem({
  id,
  title,
  // creationDate,
  // completionDate,
  completed,
  onDelete,
  onComplete,
  onDecomplete,
  onUpdate,
}) {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  function handleCompleteChanged(event) {
    const emit = event.target.checked ? onComplete : onDecomplete;
    // setTimeout(() => {
    emit(id);
    // }, 300);
  }
  function handleEdit() {
    if (completed) return;
    setEditing(true);
  }
  function handleUpdate() {
    const newTitle = inputRef.current.value;
    if (newTitle.trim() === "" || newTitle === title) handleCancelEdit();
    onUpdate(id, newTitle);
    handleCancelEdit();
  }
  function handleCancelEdit() {
    setEditing(false);
  }

  return (
    <div
      className={`${classes["todo-list-item"]} ${
        completed ? classes["todo-list-item--completed"] : ""
      }`}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCompleteChanged}
      />
      {!editing && (
        <p className={classes["todo-list-item__title"]} onClick={handleEdit}>
          {title}
        </p>
      )}
      {editing && (
        <input
          defaultValue={title}
          className={classes["todo-list-item__input"]}
          ref={inputRef}
          onBlur={handleUpdate}
        />
      )}
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
}
