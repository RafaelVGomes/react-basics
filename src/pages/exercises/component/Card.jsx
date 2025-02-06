import PropTypes from 'prop-types';

export default function Card({ title = 'Card Title', children, borderColor = 'primary', headerBgColor = 'primary', headerTextColor = 'none'}) {
  const cardClasses = `card border-${borderColor} mb-3`;
  const cardHeaderClasses = `
    card-header bg-${headerBgColor}
    text-${headerTextColor !== 'none' ? (headerTextColor) : ('bg-' + headerBgColor)}
  `;
  return (
    // Main card container with dynamic Bootstrap classes
    <div className={cardClasses}>
      {/* Card header with customizable background and text colors */}
      <div className={cardHeaderClasses}>{title} {headerTextColor}</div>
      {/* Card body to display child content */}
      <div className="card-body">{children}</div>
    </div>
  );
}

// Bootstrap color options
const colorOptions = ['none', 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

// PropTypes validation
Card.propTypes = {
  title: PropTypes.string, // Title displayed in the card header
  children: PropTypes.node.isRequired, // Content inside the card body
  borderColor: PropTypes.oneOf(colorOptions), // Bootstrap color class for the border
  headerBgColor: PropTypes.oneOf(colorOptions), // Bootstrap color class for the header background
  headerTextColor: PropTypes.oneOf(colorOptions), // Bootstrap color class for the header text
};

// Arguments for page dynamic generation
Card.args = {
  title: 'Card Title',
  children: 'This is the card content.',
  borderColor: 'primary',
  headerBgColor: 'primary',
  headerTextColor: 'none',
};
