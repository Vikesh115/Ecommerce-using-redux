import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

function Navbar({ isLoggedIn, handleLogout }) {
  const { cartCount } = useSelector((state) => state.cart);
  const { wishlistCount } = useSelector((state) => state.wishlist);
  const navigate = useNavigate();

  const handleLoginRedirect = (path) => {
    navigate("/login", { state: { from: path } });
  };

  return (
    <div>
      {/* Desktop Navbar */}
      <div className="hidden md:flex p-10 md:px-36 px-6 justify-between items-center text-red-950 bg-lime-600 md:bg-blue-900 md:text-cyan-500">
        <NavLink to="/" className="flex font-bold text-2xl ">
          Shop
        </NavLink>
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <>
              <NavLink to="/wishlist" className="flex flex-col items-center text-gray-50">
                <p className="flex font-extrabold">{wishlistCount}</p>
                <button>
                  <FaRegHeart size={40} />
                </button>
              </NavLink>
              <NavLink to="/cart" className="flex flex-col items-center">
                <p className="flex font-extrabold">{cartCount}</p>
                <button>
                  <BsCart4 size={40} />
                </button>
              </NavLink>
              <button
                className="flex p-2 rounded-2xl bg-red-600 text-gray-50"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => handleLoginRedirect("/wishlist")}
                className="flex flex-col items-center"
              >
                <p className="flex font-extrabold">{wishlistCount}</p>
                <FaRegHeart size={40} />
              </button>
              <button
                onClick={() => handleLoginRedirect("/cart")}
                className="flex flex-col items-center"
              >
                <p className="flex font-extrabold">{cartCount}</p>
                <BsCart4 size={40} />
              </button>
              <NavLink to="/login" className="flex p-2 bg-blue-600 text-white rounded-lg">
                Login
              </NavLink>
              <NavLink to="/signup" className="flex p-2 bg-teal-600 text-white rounded-lg">
                Signup
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex w-[100%] justify-center">
        <div className="flex md:hidden fixed top-0 w-[100%] h-20 p-6 bg-emerald-900 justify-between items-center z-56">
          <NavLink to="/" className="flex hover:text-emerald-600 text-white font-extrabold text-2xl">
            Shop
          </NavLink>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <NavLink to="/wishlist" className="flex flex-col items-center text-white">
                  <p className="flex font-extrabold">{wishlistCount}</p>
                  <FaRegHeart size={30} />
                </NavLink>
                <button onClick={handleLogout}>
                  <IoMdLogOut size={30} className="text-white" />
                </button>
              </>
            ) : (
              <>
                <button
                  className="flex flex-col items-center text-white"
                  onClick={() => handleLoginRedirect("/wishlist")}
                >
                  <p className="flex font-extrabold text-white">{wishlistCount}</p>
                  <FaRegHeart size={40} />
                </button>
                <NavLink to="/login" className="flex p-2 bg-blue-600 text-white rounded-lg">
                  Login
                </NavLink>
                <NavLink to="/signup" className="flex p-2 bg-yellow-600 text-white rounded-lg">
                  Signup
                </NavLink>
              </>
            )}
          </div>
        </div>

        <div className="flex md:hidden fixed -bottom-1 w-[100%] h-20 bg-emerald-900 justify-evenly items-center z-50">
          <NavLink to="/" className="flex hover:text-cyan-600 text-white font-extrabold text-xl">
            Home
          </NavLink>
          <NavLink to="/cart" className="flex flex-col items-center text-white">
            <p className="flex font-extrabold">{cartCount}</p>
            <BsCart4 size={30} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;