import React from 'react';
import background from '../assets/Group46.png';
import imgFooter1 from '../assets/pngwing 1.png';
import imgFooter2 from '../assets/pngwing 2.png';
import Button from './Button';

const Form = () => {
  return (
    <div>
      <div style={containerWrapper} id="form">
        <div style={container}>
          <p style={text}>Subscribe to get the Latest News</p>
          <p style={text2}>Don’t miss out on our latest news, updates, tips and special offers</p>
          <div style={inputWrapper}>
            <input style={input} type={text} placeholder="Enter your mail" />
            <Button text="Suscribe" variant="Suscribe" />
          </div>
        </div>
      </div>
      <div style={imageWrapper}>
        <img src={imgFooter1} alt="imgFooter1" style={img} />
        <img src={imgFooter2} alt="imgFooter2" style={img} />
      </div>
    </div>
  );
};

export default Form;

const containerWrapper = {
  marginTop: '5rem',
  backgroundImage: `url(${background})`,
  display: 'flex',
  justifyContent: 'center',
  height: '374px',
};

const container = {
  width: '980px',
  height: '214px',
  textAlign: 'center',
  marginTop: '5rem',
};

const text = {
  color: '#FFF',
  fontFamily: 'playfair display',
  lineHeight: '71.98px',
  fontWeight: '700',
  fontSize: '54px',
  marginTop: '-0.5rem',
};
const text2 = {
  color: '#FFF',
  fontFamily: 'playfair display',
  fontWeight: '400',
  fontSize: '20px',
  marginTop: '1rem',
};
const inputWrapper = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2rem',
};
const input = {
  width: '642px',
  height: '66px',
  backgroundColor: '#FFF9F1',
  border: '1px solid rgba(249, 192, 106, 0.42)',
  borderRadius: '4px',
  fontFamily: 'playfair display',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '34px',
  padding: '2rem',
  marginRight: '-3rem',
};

const imageWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '-15rem',
};

const img = {
  position: 'relative',
  zIndex: '1',
};
