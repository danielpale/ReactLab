import classes from "./TodoListItem.module.css";

export default function TodoListItem({
  id,
  title,
  creationDate,
  completionDate,
  completed,
}) {
  return (
    <div
      className={`${classes["todo-list-item"]} ${
        completed ? classes["todo-list-item--completed"] : ""
      }`}
    >
      <input type="checkbox" />
      <p className={classes["todo-list-item__title"]}>{title}</p>
    </div>
  );
}
