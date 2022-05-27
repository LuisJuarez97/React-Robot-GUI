import React, { useContext } from "react";
import JointContext from "../context/Joint/JointContext";
import Jog from "./Jog";
import RoundCheckBox from "./RoundCheckBox";
import '../styles/JoggingPanel.css'

const JoggingPanel = () => {
  const { joints } = useContext(JointContext);

  console.log("-----> JOGGING PANEL");
  console.log(joints);

  return (
    <div className="container">
      {joints.map((el, i) => (
        <Jog key={i} joint={i} />
      ))}
      <RoundCheckBox />
    </div>
  );
};

export default JoggingPanel;
