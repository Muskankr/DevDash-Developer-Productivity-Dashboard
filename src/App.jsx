import { useState } from "react";
import GitHubProfile from "./components/GitHubProfile";
import Goals from "./components/Goals";
import Streak from "./components/Streak";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <ThemeToggle dark={dark} setDark={setDark} />

      <h1 className="title">DevDash 🚀</h1>
      <p className="subtitle">Developer Productivity Dashboard</p>

      <div className="grid">
        <GitHubProfile />
        <Goals />
        <Streak />
      </div>
    </div>
  );
}

export default App;
