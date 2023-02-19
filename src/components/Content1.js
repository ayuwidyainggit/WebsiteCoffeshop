import React from 'react';
import gambar1 from '../assets/coffee_blast.png';
import image2 from '../assets/gambar2.png';
import Button from '../components/Button';

const Content1 = () => {
  return (
    <div>
      <div style={container} id="content1">
        <div style={content}>
          <div style={textContent}>
            <p style={text1}>Discover the best coffee</p>
            <p style={text2}>
              Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that
              you will enjoy this coffee more than others you have ever tasted.
            </p>
            <Button text="Learn More" variant="warning" />
          </div>
          <div style={imgContent}>
            <img style={gambar} src={image2} alt="x" />
          </div>
        </div>
      </div>
      <img style={coffee} src={gambar1} alt="gambar2" />
    </div>
  );
};
export default Content1;

const container = {
  justifyContent: 'center',
  display: 'flex',
  marginTop: '2rem',
};
const content = {
  width: '1180px',
  height: '449px',
  justifyContent: 'space-between',
  display: 'flex',
  marginTop: '2rem',
};
const imgContent = {
  width: '500px',
  height: '322.83px',
  display: 'flex',
  justifyContent: 'center',
};
const textContent = {
  marginLeft: '2rem',
  width: '585px',
  height: '322.83px',
};

const gambar = {
  marginTop: '-3rem',
  width: '500px',
  height: '449px',
};

const coffee = {
  width: '498px',
  height: '272px',
  marginLeft: '-22px',
  marginTop: '-12rem',
  borderColor: 'red',
};

const text1 = {
  fontFamily: 'playfair display',
  fontWeight: '700',
  fontSize: '54px',
  lineHeight: '71.98px',
  color: '#603809',
  marginRight: '-15rem',
};

const text2 = {
  fontFamily: 'playfair display',
  fontWeight: '400',
  lineHeight: '34px',
  fontSize: '20px',
  color: '#707070',
  marginTop: '1rem',
};
