import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <div className="app-container">
      <main className="main-content">
        <div className="card">
          <RegisterForm />
        </div>
        
        <div className="card bottom-card">
          <p>Have an account?</p>
          <Link to="/">Log in</Link>
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

export default Register;
