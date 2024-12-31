import React from "react";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { BsCart4 } from "react-icons/bs"
import { FaRegHeart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

function Navbar({ handleLogout }) {
  const { cartCount } = useSelector(state => state.cart)
  const { wishlistCount } = useSelector(state => state.wishlist)
  console.log("cartCount: " + cartCount);
  console.log("wishlistCount: " + wishlistCount);

  return (
    <div >
      <div className='hidden md:flex p-10 md:px-36 px-6 justify-between items-center text-red-950 bg-lime-600 md:bg-blue-900 md:text-cyan-500 '>
        <NavLink to={"/"} className="flex font-bold text-2xl ">Shop</NavLink>
        <div className="flex items-center gap-6">
          <NavLink to={"/wishlist"} className="flex flex-col items-center text-gray-50">
            <p className="flex font-extrabold">{wishlistCount}</p>
            <button><FaRegHeart size={40} /></button>
          </NavLink>
          <NavLink to={"/cart"} className="flex flex-col items-center">
            <p className="flex font-extrabold">{cartCount}</p>
            <button ><BsCart4 size={40} /></button>
          </NavLink>
          <button className="flex p-2 rounded-2xl bg-red-600 text-gray-50" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <div className="flex w-[100%] justify-center ">
        <div className="flex md:hidden fixed top-0 w-[100%] h-20 p-6 bg-emerald-900 justify-between items-center z-56">
          <NavLink to={"/"} className="flex hover:text-emerald-600  text-white font-extrabold text-2xl">Shop</NavLink>
          <div className="flex flex-row gap-2">
            <NavLink to={"/wishlist"} className="flex flex-col justify-center items-center hover:text-lime-600  text-white"><p className="flex font-extrabold">{wishlistCount}</p><FaRegHeart size={40} className="flex" />
            </NavLink>
            <button className="flex items-center" onClick={handleLogout}>
                <IoMdLogOut size={40} className="text-zinc-50" />
              </button>
          </div>
        </div>
        <div className='flex md:hidden fixed -bottom-1 w-[100%] h-20  bg-emerald-900 justify-evenly items-center z-50'>
          <NavLink to={"/"} className="flex hover:text-cyan-600  text-white font-extrabold text-xl">Home</NavLink>
          <NavLink to={"/cart"} className="flex flex-col justify-center items-center hover:text-purple-600  text-white"><p className="flex font-extrabold">{cartCount}</p><BsCart4 size={40} className="flex" /></NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;