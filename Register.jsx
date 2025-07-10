import React, { useState } from 'react';
import FormInput from '../components/FormInput';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', age: '', gender: '', contact: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert("Registered Successfully!");
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <FormInput name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
        <FormInput name="email" value={formData.email} onChange={handleChange} placeholder="Email" type="email" />
        <FormInput name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" />
        <FormInput name="age" value={formData.age} onChange={handleChange} placeholder="Age" type="number" />
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <FormInput name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact Number" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
