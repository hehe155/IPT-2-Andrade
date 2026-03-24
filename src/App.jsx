import './App.css';

function App() {
  return (
    <>
      <header>
        <h1><span>Your Name</span></h1>
        <p><strong>Integrative Programming and Technologies 2</strong></p>
        <p>Developer • Student • Problem Solver</p>
      </header>

      <nav>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#reflection">Reflection</a>
      </nav>

      <section id="about">
        <img src="https://via.placeholder.com/150" className="profile" alt="Profile" />
        <h2>About Me</h2>
        <p>
          I am a motivated student passionate about technology and software development.
          I enjoy creating modern digital experiences and continuously learning new tools.
        </p>
        <br />
        <p><strong>Biggest Accomplishment:</strong> Completing my first full project</p>
        <p><strong>Area of Interest:</strong> Web, Backend, AI</p>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="grid">
          <div className="card">
            <h3>Languages</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="card">
            <h3>Tools</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>VS Code</li>
              <li>MySQL</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>Personal website to showcase my profile.</p>
            <p><strong>Tech:</strong> HTML, CSS</p>
          </div>
          <div className="card">
            <h3>To-Do App</h3>
            <p>Task management application.</p>
            <p><strong>Tech:</strong> JavaScript</p>
          </div>
        </div>
      </section>

      <section id="reflection">
        <h2>Reflection</h2>
        <p><strong>Technologies used:</strong> HTML and CSS for clean structure and modern UI.</p>
        <p><strong>Easiest:</strong> Structuring content.</p>
        <p><strong>Hardest:</strong> UI styling and spacing.</p>
        <p><strong>Learning next:</strong> React, Node.js, AI.</p>
        <p><strong>Future apps:</strong> Scalable web platforms.</p>
      </section>

      <footer>
        <p>© 2026 Your Name</p>
      </footer>
    </>
  );
}

export default App;
