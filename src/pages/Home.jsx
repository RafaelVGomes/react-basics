import Accordion from '../components/Accordion';
import { Outlet } from 'react-router-dom';
import { componentsData } from './constants/componentsData';


export default function Home() {
  // Dynamically load exercises
  const exercises = import.meta.glob('./exercises/**/*.jsx', { eager: true });

  // Organize exercises by folder name
  const categorizedExercises = Object.entries(exercises).reduce((acc, [path, module]) => {
    const parts = path.split('/');
    const category = parts[2]; // Folder name
    const name = parts[3]?.replace('.jsx', ''); // File name

    if (!acc[category]) acc[category] = [];
    acc[category].push({ 
      name, 
      path: `/exercises/${category}/${name}`, 
      component: module.default, 
      args: componentsData.find(cat => cat.folderName === category)?.args || {} 
    });
    return acc;
  }, {});

  // Map folder names to friendly display names and sort by the given order
  const sortedCategories = componentsData.map(({ displayName, folderName }) => ({
    name: displayName, // Friendly name for display
    exercises: categorizedExercises[folderName] || [],
  }));

  return (
    <div className="container mt-4">
      <h1>Exercises</h1>
      <Accordion categories={sortedCategories} />
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
