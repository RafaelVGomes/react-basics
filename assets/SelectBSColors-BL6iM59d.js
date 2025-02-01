const o=`import { useState } from 'react';
import propTypes from 'prop-types';

const SelectBSColors = ({ color = 'primary', onChange }) => {
  const [bsColor, setBsColor] = useState(color);

  const handleChange = (e) => {
    const newColor = e.target.value;
    setBsColor(e.target.value);
    if (onChange) onChange(newColor);
  };

  return (
    <select className={\`form-select bg-\${bsColor} text-bg-\${bsColor}\`} onChange={handleChange} value={bsColor}>
      <option value={undefined}>Escolha uma cor</option>
      <option className='bg-primary text-bg-primary' value="primary">Primary</option>
      <option className='bg-secondary text-bg-secondary' value="secondary">Secondary</option>
      <option className='bg-success text-bg-success' value="success">Success</option>
      <option className='bg-danger text-bg-danger' value="danger">Danger</option>
      <option className='bg-warning text-bg-warning' value="warning">Warning</option>
      <option className='bg-info text-bg-info' value="info">Info</option>
      <option className='bg-light text-bg-light' value="light">Light</option>
      <option className='bg-dark text-bg-dark' value="dark">Dark</option>
    </select>
  );
};

// PropTypes validation
SelectBSColors.propTypes = {
  color: propTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onChange: propTypes.func,
};

export default SelectBSColors;`;export{o as default};
