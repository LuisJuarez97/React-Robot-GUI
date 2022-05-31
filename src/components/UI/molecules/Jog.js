import React, { useContext, useState } from "react";
import JointContext from "../../../context/Joint/JointContext";
import "./Jog.css";

function Jog({ joint }) {
  const { joints, focusClear, changeJointAngle } = useContext(JointContext);
  let jointAngle = joints[joint];
  const [input, setInput] = useState(jointAngle);

  const handleChange = (e) => {
    let value = e.target.value;
    console.log(value);
    setInput(value);
  };

  const handleBlur = (e) => {
    let value = e.target.value;
    let validatedValue = validateNumber(value);
    changeJointAngle(joint, validatedValue);
    setInput(validatedValue);
  };

  const handleClick = (joint, value) => {
    setInput(value);
    changeJointAngle(joint, value);
  };

  const handleMouseDown = () => {
    let startTime = new Date();
    console.log(startTime);
  };

  return (
    <div className="jog-container">
      <input
        type="text"
        id={"input" + (joint + 1)}
        // tabIndex={joint + 1}
        className="input focusNext"
        value={input}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => {
          if (focusClear) setInput("");
        }}
      />
      <div className="buttons-and-range-container">
        <button
          onClick={() => handleClick(joint, jointAngle - 1)}
          onMouseDown={handleMouseDown}
        >
          {"<"}
        </button>
        <input
          type="range"
          min="-180"
          max="180"
          value={jointAngle}
          onChange={handleBlur}
        />
        <button onClick={() => handleClick(joint, jointAngle + 1)}>
          {">"}
        </button>
      </div>
    </div>
  );
}

const abs = (n) => {
  if (n < 0) return -n;
  return n;
};

const validateNumber = (value) => {
  let res = parseInt(value);
  res = isNaN(res) ? 0 : abs(res);
  if (value.includes("-")) return -res;
  return res;
};

document.addEventListener("keypress", function(evt) {
  // If event isn't ENTER key
  if (evt.key !== "Enter") return;
  let element = evt.target;
  // If event didn't called by an element with class "focusNext"
  if (!evt.target.classList.contains("focusNext")) return;
  // Next finding logic
  let id = element.id;
  let next = document.querySelector(
    "#" + id.slice(0, -1) + (Number(id.slice(-1)) + 1)
  );
  // If an element was found
  if (next) {
    next.focus();
    evt.preventDefault();
  } else {
    document.querySelector("#input6").blur();
  }
});

export default Jog;
