import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import CodeViewer from './components/CodeViewer';
import Card from './components/Card';

// Import componentsData for args mapping
import { componentsData } from './pages/constants/componentsData';

export default function App() {
  const exercises = import.meta.glob('./pages/exercises/**/*.jsx', { eager: true });

  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Dynamic routing for exercises */}
          {Object.keys(exercises).map((path) => {
            const normalizedPath = path.replace('./pages', '').replace('.jsx', '');
            const parts = normalizedPath.split('/');
            const category = parts[2];
            const name = parts[3];
            const Component = exercises[path].default;

            // Retrieve args for the current category
            const args = componentsData.find(cat => cat.folderName === category)?.args || {};
            
            return (
              <Route
                key={`${category}-${name}`}
                path={`/exercises/${category}/${name}`}
                element={
                  <div>
                    <Card title='Code Preview'>
                      <CodeViewer filePath={path} />
                    </Card>
                    <Card title='Output'>
                      <Component {...args} />
                    </Card>
                  </div>
                }
              />
            );
          })}

          <Route path="/about" element={<About />} />
          <Route path="*" element={<div>Path not found: {window.location.pathname}</div>} />
        </Routes>
      </div>
    </Router>
  );
}
