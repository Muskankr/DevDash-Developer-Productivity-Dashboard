import { useEffect, useState } from "react";

function Goals() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("goals"));
    if (saved) setGoals(saved);
  }, []);


  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addGoal = () => {
    if (!goal.trim()) return;
    setGoals([...goals, { text: goal, done: false }]);
    setGoal("");
  };

  const toggleGoal = (index) => {
    const updated = [...goals];
    updated[index].done = !updated[index].done;
    setGoals(updated);
  };

  return (
    <div className="card">
      <h3>Daily Goals</h3>

      <div style={{ display: "flex", gap: "8px" }}>
        <input
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Enter today's goal"
        />
        <button onClick={addGoal}>Add</button>
      </div>

      <ul style={{ marginTop: "10px" }}>
        {goals.map((g, i) => (
          <li
            key={i}
            onClick={() => toggleGoal(i)}
            style={{
              cursor: "pointer",
              textDecoration: g.done ? "line-through" : "none",
              color: g.done ? "green" : "inherit",
            }}
          >
            {g.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Goals;
