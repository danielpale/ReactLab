import classes from "./TheHeader.module.css";
import logo from "../../assets/images/logo-light.svg";

import BaseSection from "../base/BaseSection";

export default function TheHeader() {
  return (
    <header className={classes["the-header"]}>
      <BaseSection
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          paddingBlock: "0",
        }}
        fullHeight
      >
        <img src={logo} alt="logo" />
        <h6 className="ff-text">Todo App</h6>
      </BaseSection>
    </header>
  );
}
