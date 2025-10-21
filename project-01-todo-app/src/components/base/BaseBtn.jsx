import classes from "./BaseBtn.module.css";

const TYPE_CLASSES = {
  primary: classes["base-btn--primary"],
  secondary: classes["base-btn--secondary"],
};

export default function BaseBtn({ type = "primary", children, ...props }) {
  let typeClass = TYPE_CLASSES[type];

  return (
    <button className={`fs-400 ${classes["base-btn"]} ${typeClass}`} {...props}>
      {children}
    </button>
  );
}
