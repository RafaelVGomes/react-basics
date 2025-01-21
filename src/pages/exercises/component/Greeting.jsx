import PropTypes from 'prop-types';

export default function Greeting({ name = "visitante" }) {
  return (
    <div>
      <p>Olá, {name}!</p>
    </div>
  )
}

// PropTypes validation
Greeting.propTypes = {
  name: PropTypes.string,
};
