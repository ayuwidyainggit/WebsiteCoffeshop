import React from 'react';
import 'typeface-clicker-script';
import 'typeface-playfair-display';
import '../style/Button.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={nav}>
      <h1 style={{ fontWeight: '400', paddingTop: '1rem' }}>Bean Scene</h1>
      <ul style={myUl}>
        <a href="#home" style={text}>
          Home
        </a>
        <a href="#Product" style={text}>
          Menu
        </a>
        <a href="#content3" style={text}>
          About Us
        </a>
        <a href="#form" style={text}>
          Contact Us
        </a>
      </ul>
      <ul style={myReg}>
        <li style={{ paddingTop: '1rem', marginRight: '2rem', color: 'white' }}>
          <Link to="/Login" style={link}>
            Login
          </Link>
        </li>
        <button className="btn-warning">
          <Link style={{ textDecoration: 'none', color: 'black', fontFamily: 'playfair display' }} to="/Register">
            Register
          </Link>
        </button>
      </ul>
    </div>
  );
};

export default Navbar;

const nav = {
  position: 'relative',
  display: 'flex',
  color: '#FFF',
  gridTemplateColumns: 'auto auto auto',
  background: 'none',
  padding: '0.6rem',
  justifyContent: 'space-between',
  fontFamily: 'clicker script',
  fontStyle: 'normal',
  fontSize: '14px',
  lineHeight: '18.66px',
  paddingLeft: '5rem',
  textShadow: 'rgba(0, 0, 0, 0.25)',
  zIndex: '1',
  cursor: 'pointer',
};

const myUl = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  width: '30%',
  paddingTop: '1rem',
};

const myReg = {
  listStyle: 'none',
  display: 'flex',
  fontFamily: 'playfair display',
  justifyContent: 'space-between',
  width: '17%',
  paddingRight: '5%',
};

const text = {
  color: '#FFFF',
  textDecoration: 'none',
  fontFamily: 'playfair display',
};

const link = {
  textDecoration: 'none',
  color: 'white',
};
