import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const wrapper = style({
  position: "fixed",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
});

export const overlay = style({
  position: "absolute",
  inset: 0,
  background: "rgba(0, 0, 0, 0.35)",
});

export const modalWindow = style({
  position: "relative",
  zIndex: 1001,
  width: "min(560px, 92vw)",
  maxHeight: "86vh",
  overflowY: "auto",
  background: vars.color.list,
  padding: vars.spacing.big2,
  borderRadius: 12,
  boxShadow: vars.shadow.basic,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.big1,
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: vars.spacing.big1,
});

export const title = style({
  fontSize: vars.fontSizing.T3,
  fontWeight: 600,
});

export const closeButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 32,
  height: 32,
  borderRadius: 8,
  fontSize: vars.fontSizing.T2,
  cursor: "pointer",
  transition: "all .15s ease",
  ":hover": {
    backgroundColor: vars.color.task,
    boxShadow: vars.shadow.basic,
    opacity: 0.9,
  },
});

export const input = style({
  width: "100%",
  borderRadius: 8,
  border: "1px solid rgba(0,0,0,.08)",
  background: "white",
  padding: "10px 12px",
  fontSize: vars.fontSizing.T2,
  selectors: {
    "&:focus": {
      outline: `2px solid ${vars.color.task}`,
    },
  },
});

export const textarea = style([
  input,
  {
    resize: "vertical",
    minHeight: 96,
  },
]);

export const buttons = style({
  marginTop: vars.spacing.big2,
  display: "flex",
  gap: vars.spacing.big1,
});

export const updateButton = style({
  padding: "10px 14px",
  borderRadius: 10,
  border: "none",
  background: "#3b82f6",
  color: "white",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform .1s ease, opacity .1s ease",
  ":hover": { opacity: 0.95, transform: "translateY(-1px)" },
  ":active": { transform: "translateY(0)" },
});

export const deleteButton = style({
  padding: "10px 14px",
  borderRadius: 10,
  border: "none",
  background: "#ef4444",
  color: "white",
  fontWeight: 600,
  cursor: "pointer",
  transition: "transform .1s ease, opacity .1s ease",
  ":hover": { opacity: 0.95, transform: "translateY(-1px)" },
  ":active": { transform: "translateY(0)" },
});
