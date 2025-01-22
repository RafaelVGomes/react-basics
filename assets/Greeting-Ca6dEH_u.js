const n=`import PropTypes from 'prop-types';

export default function Greeting({ name = "visitante", nick = "unknown" }) {
  return (
    <div>
      <p>Olá, {name} ({nick})!</p>
    </div>
  )
}

// Arguments for page dynamic generation
Greeting.args = {
  name: 'visitante',
  nick: 'unknown'
};

// PropTypes validation
Greeting.propTypes = {
  name: PropTypes.string,
  nick: PropTypes.string
};
`;export{n as default};
