import { useEffect, useState } from "react";

function GitHubProfile() {
  const [user, setUser] = useState(null);
  const username = "Muskankr"; 
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  if (!user) return <div className="card">Loading GitHub...</div>;

  return (
    <div className="card">
      <h3>GitHub Profile</h3>
      <img
        src={user.avatar_url}
        alt="avatar"
        className="avatar"
      />
      <p><strong>{user.name}</strong></p>
      <p>@{user.login}</p>
      <p>Repos: {user.public_repos}</p>
      <p>Followers: {user.followers}</p>
      <a href={user.html_url} target="_blank">View Profile</a>
    </div>
  );
}

export default GitHubProfile;
