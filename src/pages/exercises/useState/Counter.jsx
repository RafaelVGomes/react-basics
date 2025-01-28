import { useState } from 'react';

import Card from '../component/Card';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="container mt-5">
      <Card title='Contador'>
        <p className="card-text">Valor atual: {count}</p>
        <button className="btn btn-primary" onClick={increment}>Incrementar</button>
      </Card>
    </div>
  );
}