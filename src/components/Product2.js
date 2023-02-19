import React from 'react';
import Button from './Button';

class Product2 extends React.Component {
  state = {
    products: [
      {
        id: 1,
        text1: 'Supreme Beans',
        text2: 'Beans that provides great taste',
        image: require('../assets/coffee-beans 1.png'),
      },
      {
        id: 2,
        text1: 'High Quality',
        text2: 'We provide the highest quality ',
        image: require('../assets/badge 1.png'),
      },
      {
        id: 3,
        text1: 'Extraordinary',
        text2: 'Coffee like you have never tasted',
        image: require('../assets/coffee-cup 1.png'),
      },
      {
        id: 4,
        text1: 'Affordable Price',
        text2: 'Our Coffee prices are easy to afford',
        image: require('../assets/best-price 1.png'),
      },
    ],
  };
  render() {
    const { products } = this.state;
    return (
      <div style={wrapper} id="Product2">
        <p style={title1}>Why are we different?</p>
        <p style={title2}>We don’t just make your coffee, we make your day!</p>
        <div style={containerWrapper}>
          <div>
            <div style={container}>
              {products.map((item) => (
                <div key={item.id} style={imageWrapper}>
                  <div style={contentWrapper}>
                    <img style={image} src={item.image} alt={item.image} />
                    <p style={text1}>{item.text1}</p>
                    <p style={text2}>{item.text2}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={footerWrapper}>
          <div style={contentFooter}>
            <p style={text2}>Great ideas start with great coffee, Lets help you achieve that</p>
            <p style={text1}>Get started today.</p>
          </div>
        </div>

        <Button text="Join Us" variant="warning" />
      </div>
    );
  }
}

export default Product2;

const title1 = {
  fontFamily: 'playfair display',
  fontWeight: '700',
  fontSize: '54px',
  lineHeight: '71.98px',
  color: '#603809',
  marginTop: '-13rem',
};

const title2 = {
  fontFamily: 'playfair display',
  fontWeight: '400',
  fontSize: '28px',
  lineHeight: '34px',
  color: '#707070',
  marginTop: '1rem',
};

const wrapper = {
  marginTop: '70px',
  textAlign: 'center',
};
const containerWrapper = {
  display: 'flex',
  justifyContent: 'center',
};

const container = {
  width: '1180px',
  height: '388px',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '2rem',
};

const imageWrapper = {
  borderStyle: 'solid',
  border: '1px solid rgba(249, 192, 106, 0.42)',
  width: '280px',
  height: '284px',
  margin: '0 auto',
  backgroundColor: '##FFF9F1',
  hover: {
    background: 'red',
  },
};
const contentWrapper = {
  // width: '166px',
  height: '212px',
  margin: '0 auto',
  backgroundColor: '##FFF9F1',
};

const image = {
  width: '88px',
  height: '88ppx',
  paddingTop: '2rem',
};

const text1 = {
  fontFamily: 'playfair display',
  fontWeight: '700',
  fontSize: '22px',
  lineHeight: '29.33px',
  color: '#603809',
  marginTop: '1rem',
};
const text2 = {
  fontFamily: 'playfair display',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '21.33px',
  color: '#1E1E1E',
  marginTop: '1rem',
};

const footerWrapper = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '2rem',
};
const contentFooter = {
  fontFamily: 'playfair display',
  width: '980px',
  height: '70px',
  marginTop: '-4rem',
};
