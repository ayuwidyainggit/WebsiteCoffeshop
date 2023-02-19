import React from 'react';
import background from '../assets/Group38.png';
import Button from './Button';

const Content2 = () => {
  return (
    <div style={containerWrapper}>
      <div style={container2}>
        <div style={content}>
          <p style={text1}>Get a chance to have an Amazing morning</p>
          <p style={text2}>We are giving you are one time opportunity to experience a better life with coffee.</p>
          <Button text="Order Now" variant="warning" />
        </div>
      </div>
    </div>
  );
};

export default Content2;

const containerWrapper = {
  marginTop: '5rem',
  backgroundImage: `url(${background})`,
};

const container2 = {
  height: '574px',

  zIndex: '1',
  paddingTop: '8.5rem',
  paddingLeft: '8rem',
  // borderStyle: 'solid',
  // borderColor: 'coral',
};

const content = {
  width: '575px',
  height: '304px',
};

const text1 = {
  color: '#FFF',
  fontFamily: 'playfair display',
  fontWeight: '700',
  lineHeight: '72px',
  fontSize: '50px',
  width: '575px',
  height: '144px',
};
const text2 = {
  width: '409px',
  height: '68px',
  color: '#FFF',
  fontFamily: 'playfair display',
  fontWeight: '400',
  lineHeight: '34px',
  fontSize: '20px',
};
