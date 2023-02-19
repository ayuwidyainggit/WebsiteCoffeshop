import React from 'react';
import '../style/Button.css';

const Button = (props) => {
  return (
    <button style={{ fontFamily: 'playfair display' }} className={`btn-${props.variant}`}>
      {props.text}
    </button>
  );
};

export default Button;

// style={(imageBottom, { position: 'relative', right: '-75%' })}
