/* Reset & Variables */
:root {
  --bg: #0d0d0d;
  --fg: #ffffff;
  --accent: #a259ff;
  --glass-bg: rgba(255, 255, 255, 0.05);
  --glass-blur: blur(10px);
}

body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: var(--bg);
  color: var(--fg);
  scroll-behavior: smooth;
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 100;
}

.menu-controls button {
  background: none;
  border: 1px solid var(--accent);
  color: var(--accent);
  border-radius: 8px;
  margin-left: 10px;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
}

/* Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: -220px;
  height: 100vh;
  width: 200px;
  background-color: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  z-index: 1000;
}

.sidebar.open {
  left: 0;
}

.sidebar a {
  margin: 1rem 0;
  color: var(--accent);
  text-decoration: none;
  font-weight: bold;
}

/* Hero Section */
.hero {
  text-align: center;
  padding: 5rem 1rem;
}

.hero .highlight {
  color: var(--accent);
}

.hero .profile-img {
  max-width: 200px;
  border-radius: 50%;
  margin-top: 2rem;
}

.section {
  padding: 3rem 1rem;
  text-align: center;
}

.skills span {
  margin: 0.4rem;
  padding: 0.5rem 1rem;
  background: #1c1c1c;
  border-radius: 10px;
  display: inline-block;
}

.project-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.card {
  padding: 1rem;
  border-radius: 20px;
  text-align: left;
}

.glass {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.glass:hover {
  transform: scale(1.03);
}

.card img {
  width: 100%;
  border-radius: 10px;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: var(--accent);
  color: white;
  text-decoration: none;
  border-radius: 8px;
}

footer {
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.8rem;
  color: #888;
}

/* Light theme toggle */
body.light {
  --bg: #ffffff;
  --fg: #0d0d0d;
  --glass-bg: rgba(0, 0, 0, 0.05);
}

@media (max-width: 768px) {
  .project-cards {
    grid-template-columns: 1fr;
  }
}
