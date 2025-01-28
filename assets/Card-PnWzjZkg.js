const r=`import PropTypes from 'prop-types';

export default function Card({ title = 'Card Title', children, borderColor = 'primary', headerBgColor = 'primary', headerTextColor = 'white' }) {
  return (
    // Main card container with dynamic Bootstrap classes
    <div className={\`card border-\${borderColor} mb-3\`}>
      {/* Card header with customizable background and text colors */}
      <div className={\`card-header bg-\${headerBgColor} text-\${headerTextColor}\`}>{title}</div>
      {/* Card body to display child content */}
      <div className="card-body">{children}</div>
    </div>
  );
}

// PropTypes validation
Card.propTypes = {
  title: PropTypes.string, // Title displayed in the card header
  children: PropTypes.node.isRequired, // Content inside the card body
  borderColor: PropTypes.string, // Bootstrap color class for the border
  headerBgColor: PropTypes.string, // Bootstrap color class for the header background
  headerTextColor: PropTypes.string, // Bootstrap color class for the header text
};
`;export{r as default};
