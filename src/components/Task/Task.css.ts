import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  padding: vars.spacing.medium,
  backgroundColor: vars.color.task,
  borderRadius: 10,
  marginBottom: vars.spacing.big2,
  boxShadow: vars.shadow.basic,
  cursor: "default",
  ":hover": {
    backgroundColor: vars.color.taskHover,
    transform: "scale(1.03)",
  },
});

export const taskHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.spacing.small,
});

export const title = style({
  fontSize: vars.fontSizing.T4,
  fontWeight: "bold",
  marginBottom: vars.spacing.small,
  selectors: {
    [`${taskHeader} &`]: { marginBottom: 0 },
  },
});

export const description = style({
  fontSize: vars.fontSizing.P1,
});

export const editButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 28,
  height: 28,
  borderRadius: 8,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  transition: "all .15s ease",
  ":hover": {
    backgroundColor: "rgba(0,0,0,.06)",
    transform: "translateY(-1px)",
  },
  ":active": { transform: "translateY(0)" },
});