import React from "react";
import RobotCAD from "../UI/molecules/RobotCAD";
import JoggingPanel from "../UI/organisms/JoggingPanel";
import "./GraphicalInterface.css";

const GraphicalInterface = () => {
  return (
    <div id="wrapper">
      <div id="menu-bar">menu-bar</div>
      <div id="jogging-panel"><JoggingPanel /></div>
      <div id="robot-position-panel">robot-position-panel</div>
      <div id="robot-cad-window"><RobotCAD /></div>
      <div id="programming-panel">programming-panel</div>
      <div id="command-panel">command-panel</div>
    </div>
  );
};

export default GraphicalInterface;
