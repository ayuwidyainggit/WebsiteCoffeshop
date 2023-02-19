import React from 'react';
import background from '../assets/fotter_image.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';

const Footer = () => {
  return (
    <div style={containerWrapper}>
      <div style={content}>
        <div style={beanSchene}>
          <p style={title1}>Bean Scene</p>
          <p style={text1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>
          <div style={icon}>
            <img src={icon1} alt="imgFooter1" style={img} />
            <img src={icon2} alt="imgFooter1" style={img} />
            <img src={icon3} alt="imgFooter1" style={img} />
            <img src={icon4} alt="imgFooter1" style={img} />
          </div>
        </div>
        <div style={about}>
          <p style={title2}> About</p>
          <p style={text2}>Menu</p>
          <p style={text2}>Features</p>
          <p style={text2}>News & Blogs</p>
          <p style={text2}>Help & Supports</p>
        </div>
        <div style={company}>
          <p style={title2}>Company</p>
          <p style={text2}>How we work</p>
          <p style={text2}>Terms of service</p>
          <p style={text2}>Pricing</p>
          <p style={text2}>FAQ</p>
        </div>
        <div style={contactUs}>
          <p style={title2}>Contact Us</p>
          <p style={text2}>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</p>
          <p style={text2}>+1 202-918-2132</p>
          <p style={text2}>beanscene@mail.com</p>
          <p style={text2}>www.beanscene.com</p>
        </div>
      </div>
      <div style={containerWrapper2}></div>
    </div>
  );
};

export default Footer;

const containerWrapper = {
  marginTop: '-7.5rem',
  backgroundColor: '#442808',
  height: '492px',
};

const containerWrapper2 = {
  marginTop: '-26.4rem',
  backgroundImage: `url(${background})`,
  height: '492px',
  opacity: '0.3',
  backgroundBlendMode: 'overlay',
  position: 'relative',
  zIndex: '1',
};
const content = {
  display: 'flex',
  justifyContent: 'space-around',
  paddingTop: '10rem',
  textAlign: 'left',
  position: 'relative',
  zIndex: '3',
};

const beanSchene = {
  width: '280px',
  height: '258px',
};
const about = {
  width: '200px',
  height: '258px',
};
const company = {
  width: '154px',
  height: '258px',
};
const contactUs = {
  width: '332px',
  height: '258px',
};

const img = {
  width: '24px',
  height: '24px',
};

const icon = {
  width: '156px',
  height: '24px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '1rem',
};

const title1 = {
  marginTop: '-1rem',
  color: 'white',
  fontFamily: 'clicker script',
  lineHeight: '71.32px',
  fontWeight: '400',
  fontSize: '54px',
};

const text1 = {
  marginTop: '1rem',
  color: 'white',
  fontFamily: 'playfair display',
  lineHeight: '22px',
  fontWeight: '400',
  fontSize: '14px',
};

const title2 = {
  marginTop: '0.5rem',
  color: 'white',
  fontFamily: 'playfair display',
  lineHeight: '35px',
  fontWeight: '700',
  fontSize: '26px',
};

const text2 = {
  marginTop: '1rem',
  color: '#FFFFFF',
  fontFamily: 'playfair display',
  lineHeight: '32px',
  fontWeight: '400',
  fontSize: '18px',
  fontStyle: 'normal',
};
