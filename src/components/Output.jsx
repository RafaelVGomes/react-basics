import PropTypes from 'prop-types';

const Output = ({ Component, args }) => {
  return (
    <div>
      <Component {...args} />
    </div>
  );
};

Output.propTypes = {
  Component: PropTypes.elementType.isRequired, // React component to render
  args: PropTypes.object.isRequired, // Arguments to pass to the component
};

export default Output;
