import { useState } from 'react';
import PropTypes from 'prop-types';

const ArgsEditor = ({ args, defaultArgs, onSend }) => {
  const [localArgs, setLocalArgs] = useState(
    Object.keys(args).reduce((acc, key) => {
      acc[key] = ''; // Initialize all inputs as empty
      return acc;
    }, {})
  );

  const handleChange = (key, value) => {
    setLocalArgs((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSend = () => {
    // Apply defaults for empty fields and send
    const validatedArgs = Object.entries(localArgs).reduce((acc, [key, value]) => {
      acc[key] = value.trim() === '' ? defaultArgs[key] : value; // Apply default if input is empty
      return acc;
    }, {});

    onSend(validatedArgs); // Send validated args
  };

  if (Object.keys(args).length === 0) return null; // Render only if args exist

  return (
    <div>
      <form>
        {Object.entries(args).map(([key]) => (
          <div key={key} className="mb-3 d-flex align-items-center">
            <label htmlFor={key} className="form-label me-2">
              {key}:
            </label>
            <input
              type="text"
              id={key}
              value={localArgs[key]} // Inputs start empty
              onChange={(e) => handleChange(key, e.target.value)}
              className="form-control w-auto"
            />
          </div>
        ))}
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSend} // Validate and send
        >
          Send
        </button>
      </form>
    </div>
  );
};

ArgsEditor.propTypes = {
  args: PropTypes.object.isRequired, // Current argument values
  defaultArgs: PropTypes.object.isRequired, // Default argument values
  onSend: PropTypes.func.isRequired, // Function to send validated arguments
};

export default ArgsEditor;
