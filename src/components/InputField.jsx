import React, { useState } from 'react';

const InputField = ({ label, type, value, onChange, name, required = true }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="input-group">
      <input
        type={isPassword && showPassword ? 'text' : type}
        value={value}
        onChange={onChange}
        name={name}
        className="floating-input"
        placeholder=" "
        required={required}
      />
      <label className="floating-label">{label}</label>
      {isPassword && value.length > 0 && (
        <button
          type="button"
          className="password-toggle"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      )}
    </div>
  );
};

export default InputField;
