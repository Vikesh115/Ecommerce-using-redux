import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = `${formData.username}-token`; // Simulated token
    localStorage.setItem('user', JSON.stringify(formData));
    localStorage.setItem('token', token);
    setIsLoggedIn(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Sign Up
        </button>
        <Link to={'/login'}>Already registered? Login</Link>
      </form>
    </div>
  );
}

export default Signup;
