import React from "react";
import "./buttonComponent.css";
import { BtnTypes } from "./types";

const ButtonComponent: React.FC<BtnTypes> = ({ label, className }) => {
  return <button className={className}>{label}</button>;
};

export default ButtonComponent;
