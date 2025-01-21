import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Accordion({ categories }) {
  return (
    <div className="accordion" id="exerciseAccordion">
      {categories.map(({ name, exercises }, index) => (
        <div className="accordion-item" key={name}>
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${index}`}
              aria-expanded="false"
              aria-controls={`collapse-${index}`}
            >
              {name}
            </button>
          </h2>
          <div
            id={`collapse-${index}`}
            className="accordion-collapse collapse"
            aria-labelledby={`heading-${index}`}
            data-bs-parent="#exerciseAccordion"
          >
            <div className="accordion-body">
              <ul className="list-group">
                {exercises.map(({ name, path }) => (
                  <Link
                    key={name}
                    to={path}
                    className="list-group-item list-group-item-action"
                  >
                    {name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// PropTypes validation
Accordion.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exercises: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};
