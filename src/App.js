import React from "react";
import "./App.css";
import GraphicalInterface from "./components/pages/GraphicalInterface";
import JointState from "./context/Joint/JointState";

function App() {
  return (
    <JointState>
      <GraphicalInterface />
    </JointState>
  );
}

export default App;
