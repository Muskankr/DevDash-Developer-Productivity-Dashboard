import { useEffect, useState } from "react";

function Streak() {
  const [streak, setStreak] = useState(0);
  const [lastDate, setLastDate] = useState(null);

  useEffect(() => {
    const savedStreak = localStorage.getItem("streak");
    const savedDate = localStorage.getItem("lastDate");

    if (savedStreak) setStreak(Number(savedStreak));
    if (savedDate) setLastDate(savedDate);
  }, []);

  const today = new Date().toDateString();

  const markDoneToday = () => {
    if (lastDate === today) return;

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastDate === yesterday.toDateString()) {
      setStreak(streak + 1);
      localStorage.setItem("streak", streak + 1);
    } else {
      setStreak(1);
      localStorage.setItem("streak", 1);
    }

    localStorage.setItem("lastDate", today);
    setLastDate(today);
  };

  return (
    <div className="card">
      <h3>🔥 Coding Streak</h3>
      <p style={{ fontSize: "20px" }}>{streak} day(s)</p>
      <button onClick={markDoneToday}>Mark Today as Done</button>
    </div>
  );
}

export default Streak;
