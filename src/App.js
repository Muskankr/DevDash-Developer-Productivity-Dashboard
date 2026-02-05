import React, { useState } from "react";
import GitHubProfile from "./components/GitHubProfile";
import Goals from "./components/Goals";
import Streak from "./components/Streak";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <div className="container">
        <h1>DevDash 🚀</h1>
        <p className="subtitle">
          Developer Productivity Dashboard
        </p>

        <ThemeToggle
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <GitHubProfile />
        <Goals />
        <Streak />
      </div>
    </div>
  );
}

export default App;
