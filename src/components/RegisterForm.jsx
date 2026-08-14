import React, { useState } from 'react';
import { registerCall } from '../services/api';
import InputField from './InputField';

const RegisterForm = () => {
  const [formData, setFormData] = useState({ 
    email: '', 
    name: '', 
    username: '', 
    password: '' 
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const data = await registerCall(formData);
      setSuccess('Account created successfully! (Demo mode)');
      console.log('Registration success:', data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = 
    formData.email.length > 0 && 
    formData.name.length > 0 && 
    formData.username.length > 0 && 
    formData.password.length >= 6;

  return (
    <div className="form-container">
      <h1 className="logo">Instagram</h1>
      
      <p style={{ color: 'var(--text-secondary)', textAlign: 'center', fontWeight: '600', marginBottom: '16px' }}>
        Sign up to see photos and videos from your friends.
      </p>

      <button className="btn-primary" style={{ width: '100%', marginBottom: '16px' }}>
        <span className="facebook-icon" style={{color: 'white'}}>f</span> Log in with Facebook
      </button>

      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-text">OR</div>
        <div className="divider-line"></div>
      </div>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          label="Mobile Number or Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          label="Full Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        
        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', textAlign: 'center', margin: '14px 0', lineHeight: '16px' }}>
          People who use our service may have uploaded your contact information to Instagram. <a href="#">Learn More</a>
        </p>

        <p style={{ fontSize: '12px', color: 'var(--text-secondary)', textAlign: 'center', margin: '0 0 14px', lineHeight: '16px' }}>
          By signing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and <a href="#">Cookies Policy</a>.
        </p>

        <button 
          type="submit" 
          className="btn-primary" 
          disabled={!isFormValid || loading}
        >
          {loading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
