import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Product from '../components/Product';
import Content1 from '../components/Content1';
import Product2 from '../components/Product2';
import Content2 from '../components/Content2';
import Content3 from '../components/Content3';
import Form from '../components/Form';
import Footer from '../components/Footer';
import Login from './Login';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Content1 />
      <Product />
      <Product2 />
      <Content2 />
      <Content3 />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
