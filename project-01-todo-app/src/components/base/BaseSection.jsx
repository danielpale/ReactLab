import classes from "./BaseSection.module.css";

export default function BaseSection({
  fluid = false,
  fullHeight = false,
  children,
  ...props
}) {
  return (
    <section
      className={`${classes["base-section"]} ${
        fluid ? classes["base-section--fluid"] : ""
      } ${fullHeight ? classes["base-section--full-height"] : ""}`}
      {...props}
    >
      {children}
    </section>
  );
}
