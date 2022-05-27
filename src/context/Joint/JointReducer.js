import {
  CHANGE_JOINT_ANGLE, TOGGLE_FOCUS_CLEAR,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { type, payload } = action;

  const joints = [...state.joints];

  switch (type) {
    case CHANGE_JOINT_ANGLE:
      joints[payload.joint] = payload.value;
      return {
        ...state,
        joints: joints,
      };
    case TOGGLE_FOCUS_CLEAR:
      return {
        ...state,
        focusClear: !state.focusClear,
      }
    default:
      return state;
  }
};
