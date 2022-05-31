import React, { useEffect } from "react";
import main from "../../../utils/cube";

const RobotCAD = () => {
  useEffect(() => {
    main();
  }, [])
  
  return <div id="robot-cad"></div>;
};

export default RobotCAD;
