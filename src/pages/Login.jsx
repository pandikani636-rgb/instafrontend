import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import Footer from '../components/Footer';

const Login = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <div className="card">
          <LoginForm />
        </div>
        
        <div className="card bottom-card">
          <p>Don't have an account?</p>
          <Link to="/register">Sign up</Link>
        </div>

        <div className="get-app">
          <p>Get the app.</p>
          <div className="app-stores">
            <div className="store-btn">Google Play</div>
            <div className="store-btn">Microsoft</div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
