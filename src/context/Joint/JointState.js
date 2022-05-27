import React, { useReducer } from "react";
import JointContext from "./JointContext";
import JointReducer from "./JointReducer";
// import savedState from "./savedState.json";

const JointState = (props) => {
  const initialState = {
    joints: [0, 0, 0, 0, 0, 0],
    toolValue: 0,
    focusClear: true,
  };

  const [state, dispatch] = useReducer(JointReducer, initialState);

  const changeJointAngle = (joint, value) => {
    dispatch({
      type: "CHANGE_JOINT_ANGLE",
      payload: {
        joint,
        value,
      },
    });
  };

  const toggleFocusClear = () => {
    dispatch({
      type: "TOGGLE_FOCUS_CLEAR",
      payload: "",
    });
  }

  return (
    <JointContext.Provider
      value={{
        joints: state.joints,
        focusClear: state.focusClear,
        changeJointAngle,
        toggleFocusClear,
      }}
    >
      {props.children}
    </JointContext.Provider>
  );
};

export default JointState;
