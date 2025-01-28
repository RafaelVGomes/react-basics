const s=`import { useState } from 'react';

export default function TasksList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Tasks List</h1>
      <div className="input-group mb-3 w-auto">
        <input
          type="text"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
      </div>
      <ul className="list-group">
        {tasks.map((task, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {task} 
            <button className="btn btn-danger btn-sm" onClick={() => removeTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`;export{s as default};
