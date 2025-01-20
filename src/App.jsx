import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

export default function App() {
  const exercises = import.meta.glob('./pages/exercises/*.jsx', { eager: true });

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">React Basics</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  to="/about">About</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Dynamic routing for exercises */}
          {Object.keys(exercises).map((path) => {
            const name = path.split('/').pop().replace('.jsx', '');
            const Component = exercises[path].default;
            return (
              <Route
                key={name}
                path={`/exercises/${name.toLowerCase()}`}
                element={<Component />}
              />
            );
          })}

          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}