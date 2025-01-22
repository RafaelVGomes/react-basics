import PropTypes from 'prop-types'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CodeViewer from './CodeViewer';
import Card from './Card';
import ArgsEditor from './ArgsEditor';
import Output from './Output';

export default function DynamicPage({ exercises }) {
  const { category, name } = useParams();

  // Static defaultArgs object
  const [defaultArgs, setDefaultArgs] = useState({});
  const [tempArgs, setTempArgs] = useState({});
  const [currentComponent, setCurrentComponent] = useState(null);

  useEffect(() => {
    const componentPath = Object.keys(exercises).find((key) =>
      key.includes(`${category}/${name}`)
    );

    if (componentPath) {
      const Component = exercises[componentPath].default;

      // Retrieve args directly from the component
      const argsFromComponent = Component.args || {};

      setDefaultArgs(argsFromComponent); // Static reference to default values
      setTempArgs(argsFromComponent); // Initial temporary args
      setCurrentComponent(() => Component);
    }
  }, [exercises, category, name]);

  if (!currentComponent) {
    return <div>Loading...</div>;
  }

  const hasParams = Object.keys(defaultArgs).length > 0;

  return (
    <div>
      <Card title="Code Preview">
        <CodeViewer filePath={`./pages/exercises/${category}/${name}.jsx`} />
      </Card>

      {hasParams && (
        <Card title="Edit Arguments">
          <ArgsEditor
            args={tempArgs}
            defaultArgs={defaultArgs}
            onSend={(validatedArgs) => setTempArgs(validatedArgs)}
          />
        </Card>
      )}

      <Card title="Output">
        <Output Component={currentComponent} args={tempArgs} />
      </Card>
    </div>
  );
}

DynamicPage.propTypes = {
  exercises: PropTypes.objectOf(
    PropTypes.shape({
      default: PropTypes.elementType.isRequired, // React component
      args: PropTypes.object, // Optional arguments
    })
  ).isRequired,
};
