import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function CodeViewer({ filePath }) {
  const [code, setCode] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const files = import.meta.glob('/src/pages/exercises/**/*.jsx', { query: '?raw', import: 'default' });

    // Ajustar o caminho para começar com /src, removendo ./pages
    const adjustedPath = filePath.replace('./pages', '/src/pages');

    if (files[adjustedPath]) {
      files[adjustedPath]()
        .then(setCode)
        .catch((err) => {
          console.error('Error loading file:', err);
          setError('Failed to load code.');
        });
    } else {
      console.error('File not found:', adjustedPath);
      setError('File not found.');
    }
  }, [filePath]);

  useEffect(() => {
    Prism.highlightAll(); // Apply syntax highlighting after the code is loaded
  }, [code]);

  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <pre>
      <code className="language-jsx">{code}</code>
    </pre>
  );
}

// PropTypes validation
CodeViewer.propTypes = {
  filePath: PropTypes.string,
};