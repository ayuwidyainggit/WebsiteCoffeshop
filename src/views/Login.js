import React, { useState } from 'react';
import Button from '../components/Button';

const Login = () => {
  const [Login, setLogin] = useState(true);
  const isLogin = () => {
    setLogin(!Login);
  };

  return (
    <div style={container}>
      <div style={containerWrapper}>
        <div style={title}>
          <p>{Login ? 'Login' : 'Register'}</p>
        </div>
        <div style={content}>
          <input style={input} type="text" placeholder="Username" />
        </div>
        {!Login ? (
          <div style={content}>
            <input style={input} type="text" placeholder="Email" />
          </div>
        ) : null}
        <div style={content}>
          <input style={input} type="password" placeholder="Password" />
        </div>
        <div style={content}>
          <Button text={Login ? 'Login' : 'Register'} variant="login" />
        </div>
        <div style={content}>
          {Login ? (
            <p style={input2}>
              Sudah mempunyai akun ?
              <span onClick={isLogin} style={Register}>
                Daftar
              </span>
            </p>
          ) : (
            <p style={input2}>
              Silahkan{' '}
              <span onClick={isLogin} style={Register}>
                Login
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

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

const Register = {
  fontFamily: 'playfair display',
  fontSize: '20px',
  borderBottom: '1px solid #FFFF',
  cursor: 'pointer',
};
