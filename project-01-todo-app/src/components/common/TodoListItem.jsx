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
  const [check, setCheck] = useState(completed);
  const inputRef = useRef();

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  function handleCompleteChanged(event) {
    const emit = event.target.checked ? onComplete : onDecomplete;
    setTimeout(() => {
      emit(id);
    }, 300);
    setCheck(event.target.checked);
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
        className={classes["todo-list-item__checkbox"]}
        type="checkbox"
        checked={check}
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
      <button
        className={classes["todo-list-item__delete-btn"]}
        onClick={() => onDelete(id)}
      />
    </div>
  );
}
