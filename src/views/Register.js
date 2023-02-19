import React, { useState } from 'react';
import Button from '../components/Button';

const Register = () => {
  const [Login, setLogin] = useState(true);
  const isLogin = () => {
    setLogin(!Login);
  };

  return (
    <div style={container}>
      <div style={containerWrapper}>
        <div style={title}>
          <p>{Login ? 'Register' : 'Login'}</p>
        </div>
        <div style={content}>
          <input style={input} type="text" placeholder="Username" />
        </div>
        {Login ? (
          <div style={content}>
            <input style={input} type="text" placeholder="Email" />
          </div>
        ) : null}
        <div style={content}>
          <input style={input} type="password" placeholder="Password" />
        </div>
        <div style={content}>
          <Button text={Login ? 'Register' : 'Login'} variant="login" />
        </div>
        <div style={content}>
          {Login ? (
            <p style={input2}>
              Sudah mempunyai akun? Silahkan{' '}
              <span onClick={isLogin} style={Daftar}>
                Login
              </span>
            </p>
          ) : (
            <p style={input2}>
              Belum mempunyai akun ?
              <span onClick={isLogin} style={Daftar}>
                Daftar
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;

const container = {
  backgroundColor: '#442808',
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
};
const containerWrapper = {
  marginTop: '5rem',
  height: '500px',
  width: '300px',
};
const title = {
  display: 'flex',
  justifyContent: 'left',
  fontFamily: 'playfair display',
  fontWeight: '700',
  fontSize: '54px',
  lineHeight: '71.98px',
  color: 'white',
  marginTop: '6px',
  marginBottom: '5rem',
};
const content = {
  marginTop: '2rem',
  display: 'flex',
  justifyContent: 'left',
};

const input = {
  paddingLeft: '0.5rem',
  width: '300px',
  height: '30px',
  border: 'none',
  borderBottom: '1px solid #FFFF',
  backgroundColor: '#442808',
  color: '#FFF',
  fontFamily: 'playfair display',
};

const input2 = {
  paddingLeft: '0.5rem',
  width: '300px',
  height: '30px',
  color: '#FFF',
  fontFamily: 'playfair display',
};

const Daftar = {
  fontFamily: 'playfair display',
  fontSize: '20px',
  borderBottom: '1px solid #FFFF',
  cursor: 'pointer',
};
