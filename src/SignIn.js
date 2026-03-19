import React from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const SignIn = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (response) => {
    if (response.accessToken) {
      onLogin(response);
      navigate('/checkout');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Sign In</h2>
      <p>Please sign in to proceed to checkout.</p>
      <FacebookLogin
        appId="1517532589706683"
        autoLoad={false}
        fields="name,email,picture"
        callback={handleLogin}
        icon="fa-facebook"
        textButton="Login with Facebook"
        cssClass="btn btn-primary"
      />
    </div>
  );
};

export default SignIn;