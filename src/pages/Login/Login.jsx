import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login({ setIsLoggedIn }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (
      storedUser &&
      storedUser.username === credentials.username &&
      storedUser.password === credentials.password
    ) {
      localStorage.setItem('token', `${storedUser.username}-token`);
      setIsLoggedIn(true);
      navigate('/');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className='md:flex w-[100%] gap-3 justify-center items-center'>
    <div className="flex justify-center md:pt-5 mt-24 md:mt-0 md:w-[40%] w-[100%]">
      <form
        className="bg-white p-8 rounded-lg shadow-2xl w-96"
        onSubmit={handleLogin}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">Log In</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
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
            value={credentials.password}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-200"
        >
          Log In
        </button>
        <Link to={'/signup'} className='flex gap-1'>Not registered? <p className='flex text-blue-900 font-bold'>Signup</p></Link>
      </form>
    </div>
    <div className='md:flex hidden md:w-[40%] w-[100%] md:pt-5 justify-center'>
        <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7873.jpg?t=st=1736513360~exp=1736516960~hmac=1d7f00d8794225b09fc38a00e1aa55764f4a0c4317e510c933c33b55196b0e14&w=740" alt="" />
      </div>
    </div>
  );
}

export default Login;
