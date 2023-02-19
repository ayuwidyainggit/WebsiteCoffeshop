import React from 'react';
import background from '../assets/bg-jumbotron.jpg';
import Button from '../components/Button';

const Jumbotron = () => {
  return (
    <div style={containerWrapper} id="home">
      <div style={container}>
        <div style={container2}>
          <p style={text}>We've got your morning covered with</p>
          <p style={text2}>Coffee</p>
          <p style={text3}>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
          <Button text="Order Now" variant="warning" />
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;

const container = {
  backgroundImage: `linear-gradient(89.82deg, #1E1E1E -6.88%, rgba(0, 0, 0, 0) 87.45%)`,
  height: '768px',
  width: '1366px',
  left: '0px',
  marginTop: '-135px',
  paddingTop: '12rem',
  paddingLeft: '5rem',
  position: 'relative',
};
const containerWrapper = {
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  position: 'relative',
};

const container2 = {
  position: 'absolute',
  width: '527px',
  height: '490px',
  position: 'relative',
  zIndex: '2',
  // borderStyle: 'solid',
  // borderColor: 'coral',
};

const text = {
  color: '#FFF',
  fontFamily: 'playfair display',
  lineHeight: '29.33px',
  fontSize: '22px',
};

const text2 = {
  color: '#FFF',
  fontFamily: 'clicker script',
  fontSize: '220px',
  lineHeight: '290.58px',
  marginTop: '-2rem',
  marginBottom: '-1rem',
};

const text3 = {
  color: '#FFF',
  fontFamily: 'playfair display',
  fontWeight: '400',
  lineHeight: '34px',
  fontSize: '20px',
};
