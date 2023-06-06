import React from 'react';

const Checkboxc = ({ label, checked, style, onChange }) => {

  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <label>
      <input  type="checkbox"  checked={checked}   style={style}  onChange={handleChange} />{label}
    </label>
  );
};

export default Checkboxc;
