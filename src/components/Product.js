import React from 'react';
import image2 from '../assets/coffee_blast2.png';
import Button from './Button';

class Product extends React.Component {
  state = {
    products: [
      {
        id: 1,
        text1: 'Cappucino',
        text2: 'Coffe 50% | Milk 50%',
        text3: '$8.6',
        image: require('../assets/Rectangle 7.png'),
      },
      {
        id: 2,
        text1: 'Chai Latte',
        text2: 'Coffee 50% | Milk 50%',
        text3: '$8.6',
        image: require('../assets/Rectangle 9.png'),
      },
      {
        id: 3,
        text1: 'Macchiato',
        text2: 'Coffee 50% | Milk 50%',
        text3: '$8.6',
        image: require('../assets/Rectangle 11.png'),
      },
      {
        id: 4,
        text1: 'Expresso',
        text2: 'Coffee 50% | Milk 50%',
        text3: '$8.6',
        image: require('../assets/Rectangle 13.png'),
      },
    ],
  };
  render() {
    const { products } = this.state;
    return (
      <div style={wrapper} id="Product">
        <p style={title1}>Enjoy a new blend of coffee style</p>
        <p style={title2}>Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>
        <div style={containerWrapper}>
          <div>
            <div style={container}>
              {products.map((item) => (
                <div key={item.id} style={imageWrapper}>
                  <img style={image} src={item.image} alt={item.image} />
                  <p style={text1}>{item.text1}</p>
                  <p style={text2}>{item.text2}</p>
                  <p style={text3}>{item.text3}</p>
                  <Button text="Order Now" variant="warning" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <img src={image2} alt="image2" />
        </div>
      </div>
    );
  }
}

export default Product;

const title1 = {
  fontFamily: 'playfair display',
  fontWeight: '700',
  fontSize: '54px',
  lineHeight: '71.98px',
  color: '#603809',
  marginTop: '2px',
};

const title2 = {
  fontFamily: 'playfair display',
  fontWeight: '400',
  fontSize: '28px',
  lineHeight: '34px',
  color: '#707070',
  marginTop: '2rem',
};

const wrapper = {
  marginTop: '-60px',
  textAlign: 'center',
};
const containerWrapper = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '2.5rem',
};

const container = {
  width: '1180px',
  height: '388px',
  display: 'flex',
  justifyContent: 'space-between',
};

const imageWrapper = {
  borderStyle: 'solid',
  border: '1px solid rgba(249, 192, 106, 0.42)',
  width: '282px',
  height: '388px',
  margin: '0 auto',
};

const image = {
  width: '280px',
  height: '222ppx',
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
const text3 = {
  fontFamily: 'playfair display',
  fontWeight: '700',
  fontSize: '18px',
  lineHeight: '23.99px',
  color: '#603809',
  marginTop: '1rem',
  marginBottom: '1rem',
};
