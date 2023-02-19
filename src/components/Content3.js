import React from 'react';
import image from '../assets/coffee_blast2.png';
import image4 from '../assets/coffee_blast3.png';
import image2 from '../assets/Group 42.png';
import image3 from '../assets/Group 43.png';
import person from '../assets/person.png';
import '../style/Button.css';

const Content3 = () => {
  return (
    <div id="content3">
      <div style={{ marginTop: '7rem', display: 'flex', justifyContent: 'flex-end' }}>
        <img className="img" src={image} alt="image2" />
      </div>
      <div style={containerWrapper}>
        <div style={wrapper}>
          <p style={title1}>Our coffee perfection feedback</p>
          <p style={text2}>Our customers has amazing things to say about us</p>
        </div>
      </div>
      <div style={containerWrapper}>
        <div style={content}>
          <p style={text1}>"</p>
          <div style={textWrapper}>
            <img style={img1} src={image2} alt="image2" />
            <p style={text3}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....
            </p>
            <img style={img2} src={image3} alt="image3" />
          </div>
          <p style={text4}> Ayu Widya </p>
          <p style={text5}> Front End Developer</p>
          <div style={imageWrapper}>
            <img style={imagePerson} src={person} alt="image2" />
          </div>
        </div>
      </div>
      <div style={{ marginTop: '-10rem' }}>
        <img style={(imageBottom, { align: 'left' })} src={image4} alt="image2" />
      </div>
    </div>
  );
};

export default Content3;

const containerWrapper = {
  display: 'flex',
  justifyContent: 'center',
  // borderStyle: 'solid',
  // borderColor: 'coral',
};

const wrapper = {
  marginTop: '-20rem',
  // width: '980px',
  height: '122px',
  textAlign: 'center',
};

const title1 = {
  fontFamily: 'playfair display',
  fontWeight: '700',
  fontSize: '54px',
  lineHeight: '71.98px',
  color: '#603809',
  marginTop: '0',
};
const textWrapper = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '-1rem',
  // borderStyle: 'solid',
  // borderColor: 'coral',
};

const text1 = {
  fontFamily: 'playfair display',
  fontWeight: '700',
  fontSize: '220px',
  lineHeight: '112px',
  color: '#603809',
  marginTop: '4rem',
  marginLeft: '2rem',
};
const text2 = {
  fontFamily: 'playfair display',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '21.33px',
  color: '#1E1E1E',
};

const text3 = {
  fontFamily: 'playfair display',
  fontWeight: '600',
  fontSize: '18px',
  lineHeight: '36px',
  color: '#707070',
  textAlign: 'center',
  width: '780px',
  height: '185px',
};

const text4 = {
  fontFamily: 'playfair display',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '43px',
  color: '#603809',
  textAlign: 'center',
  marginTop: '1rem',
};
const text5 = {
  fontFamily: 'playfair display',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '34px',
  color: '#707070',
  textAlign: 'center',
  marginTop: '1.5rem',
};
const imagePerson = {
  float: 'center',
  width: '112px',
  height: '112px',
};

const imageBottom = {};
const content = {
  position: 'relative',
  zIndex: '-1',
  marginTop: '-10rem',
  width: '980px',
  height: '524px',
  backgroundColor: '#FFF9F1',
  border: '1px solid rgba(249, 192, 106, 0.42)',
  borderStyle: 'solid',
};

const img1 = {
  position: 'absolute',
  width: '82px',
  height: '82px',
  marginTop: '5rem',
  marginRight: '61.5rem',
};

const img2 = {
  position: 'absolute',
  width: '82px',
  height: '82px',
  marginTop: '5rem',
  marginLeft: '61.5rem',
};

const imageWrapper = {
  display: 'flex',
  justifyContent: 'center',
};
