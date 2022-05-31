import React, { useContext } from "react";
import JointContext from "../../../context/Joint/JointContext";
import "./RoundCheckBox.css";

const RoundCheckBox = () => {
  const { focusClear, toggleFocusClear } = useContext(JointContext);

  return (
    <div className="checkbox-container">
      focus=clear
      <label className="switch">
        <input
          type="checkbox"
          checked={focusClear}
          onChange={toggleFocusClear}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default RoundCheckBox;
