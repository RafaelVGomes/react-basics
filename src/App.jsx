import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import DynamicPage from './components/DynamicPage';

const exercises = import.meta.glob('./pages/exercises/**/*.jsx', { eager: true });

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/exercises/:category/:name" element={<DynamicPage exercises={exercises} />} />
          <Route path="*" element={<div>Path not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}
