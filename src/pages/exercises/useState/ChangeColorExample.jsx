import { useState } from 'react';
import SelectBSColors from './SelectBSColors';

const ChangeColorExample = () => {
  const [color, setColor] = useState('none');

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className={`bg-${color} p-3`}>
      <h1 className={`text-bg-${color}`}>Mude a minha cor!</h1>
      <SelectBSColors onChange={handleColorChange} />
    </div>
  );
};

export default ChangeColorExample;