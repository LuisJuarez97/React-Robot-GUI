import "./App.css";
import JoggingPanel from "./components/JoggingPanel";
import JointState from "./context/Joint/JointState";

function App() {
  return (
    <JointState>
      <JoggingPanel />
    </JointState>
  );
}

export default App;
