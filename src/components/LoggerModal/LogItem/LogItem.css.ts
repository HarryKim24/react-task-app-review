import { style } from "@vanilla-extract/css";
import { vars } from "../../../App.css";

export const logItemWrap = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr auto",
  alignItems: "center",
  gap: vars.spacing.small,
  padding: `${vars.spacing.small} ${vars.spacing.medium}`,
  backgroundColor: vars.color.task,
  borderRadius: 8,
  boxShadow: vars.shadow.basic,
  transition: "background 0.2s ease, transform 0.2s ease",
  ":hover": {
    backgroundColor: vars.color.taskHover,
    transform: "translateY(-1px)",
  },
});

export const author = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
  fontWeight: 500,
  fontSize: "1.5rem",
  color: "#333",
  whiteSpace: "nowrap",
});

export const message = style({
  display: "flex",
  alignItems: "center",
  gap: 6,
  fontSize: "1.5rem",
  color: "#222",
  fontWeight: 500,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const date = style({
  fontSize: "1rem",
  color: "#888",
  fontWeight: 400,
  whiteSpace: "nowrap",
});

export const badge = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "1px 6px",
  fontSize: "1.25rem",
  fontWeight: 600,
  borderRadius: 999,
  background: "#f1f1f3",
  color: "#111",
  letterSpacing: "-0.2px",
});