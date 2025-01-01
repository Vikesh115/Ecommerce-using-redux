import React, { useState, lazy, Suspense } from 'react';
import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Cart from './pages/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Wishlist from './pages/Wishlist/Wishlist';
import ProductDetails from './pages/ViewProductDetails/ProductDetails';
const Dashboard = lazy(() => import('./pages/Products/Dashboard'));
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const AuthRoute = ({ children }) => {
    const location = useLocation();
    if (!isLoggedIn) {
      // Redirect to login with a state to remember the intended path
      return (
        <Navigate to="/login" state={{ from: location }} />
      )
    }
    return children;
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Suspense fallback={<div className="flex justify-center item-center md:mt-0 mt-32 md:text-2xl text-xl md:text-cyan-900 text-cyan-600 font-bold">DASHBOARD is loading, please wait...</div>}><Dashboard /></Suspense>} />
        <Route path="/viewproduct/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<AuthRoute><Cart /></AuthRoute>} />
        <Route path="/wishlist" element={<AuthRoute><Wishlist /></AuthRoute>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;