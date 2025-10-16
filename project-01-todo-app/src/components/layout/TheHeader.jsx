import classes from "./TheHeader.module.css";
import logo from "../../assets/images/logo-light.svg";

export default function TheHeader() {
  return (
    <header className={classes["the-header"]}>
      <img src={logo} alt="logo" />
      <h6>Todo App</h6>
    </header>
  );
}
