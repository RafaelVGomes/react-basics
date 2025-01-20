import { Link, Outlet } from 'react-router-dom';

export default function Home() {
  const exercises = import.meta.glob('./exercises/*.jsx', { eager: true });

  return (
    <div className="container mt-4">
      <h1>Exercícios</h1>
      <ul className="list-group">
        {Object.keys(exercises).map((path) => {
          const name = path.split('/').pop().replace('.jsx', '');
          return (
            <Link
              key={name}
              to={`/exercises/${name.toLowerCase()}`}
              className="list-group-item list-group-item-action"
            >
              {name}
            </Link>
          );
        })}
      </ul>
      <div className="mt-4">
        <Outlet />
      </div>
    </div>
  );
}
