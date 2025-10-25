import { style } from "@vanilla-extract/css";
import { vars } from "../../App.css";

export const dock = style({
  position: "fixed",
  left: "50%",
  bottom: 16,
  transform: "translateX(-50%)",
  zIndex: 1000,
  width: "min(720px, 92vw)",
});

export const window = style({
  maxHeight: "30vh",
  overflowY: "auto",
  background: vars.color.list,
  borderRadius: 12,
  boxShadow: vars.shadow.basic,
  padding: vars.spacing.big1,
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.small,
  backdropFilter: "saturate(1.1)",
});

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: vars.spacing.small,
});

export const title = style({
  fontSize: vars.fontSizing.T2,
  fontWeight: 700,
  opacity: 0.85,
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.spacing.small,
});

export const disabled = style({
  opacity: 0.5,
  filter: "grayscale(0.1)",
  pointerEvents: "none",
});