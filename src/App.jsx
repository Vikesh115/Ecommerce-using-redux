import React, { useState, lazy, Suspense } from 'react'
import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Navbar from './components/Navbar/Navbar'
import Wishlist from './pages/Wishlist/Wishlist'
import ProductDetails from './pages/ViewProductDetails/ProductDetails'
const Dashboard = lazy(() => import('./pages/Products/Dashboard') );
// import Dashboard from './pages/Products/Dashboard'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <>
      {isLoggedIn ?
        (<>
          <Navbar handleLogout={handleLogout} />
          <Routes>
          <Route path='/' element={<Suspense
                fallback={<div className='flex justify-center item-center text-2xl text-cyan-900 font-bold'>DASHBOARD are loading please wait...</div>}
            >
                <Dashboard />
            </Suspense>} />
            {/* <Route path='/' element={<Dashboard />} /> */}
            <Route path="/viewproduct/:id" element={<ProductDetails />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/wishlist' element={<Wishlist />} />
          </Routes >
        </>) :
        (<>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/signup" element={<Signup  />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </>)
      }
    </>
  )
}

export default App
