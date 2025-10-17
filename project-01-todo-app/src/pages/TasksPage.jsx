import classes from "./TasksPage.module.css";
import BaseSection from "../components/base/BaseSection";
import BaseDivider from "../components/base/BaseDivider";

export default function TasksPage() {
  return (
    <div className={classes["task-page"]}>
      <BaseSection
        fullHeight
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <h6 className={`caption ff-text ${classes.title}`}>
          [Tareas Pendientes]
        </h6>
      </BaseSection>
      <BaseDivider />
      <BaseSection
        fullHeight
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <h6 className={`caption ff-text ${classes.title}`}>
          [Tareas Terminadas]
        </h6>
      </BaseSection>
    </div>
  );
}
