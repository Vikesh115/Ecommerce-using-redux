import React from 'react';
import { FaShoppingBag } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex md:flex-row flex-wrap bg-purple-900 text-white w-[100%] justify-evenly md:p-6 mb-16 -my-20 md:my-0 p-2">
      <div className='flex md:w-[20%] flex-col'>
        <div className='flex justify-center text-2xl'>
          Shop <FaShoppingBag className="ml-2" />
        </div>
        <div className='flex'>
          Explore our exclusive collection of apparel, accessories, and home decor. 
          Enjoy seamless shopping and exceptional quality every step of the way!
        </div>
      </div>
      <div className='flex md:w-[20%] flex-col'>
        <div className='flex justify-center text-2xl'>
          Useful Links
        </div>
        <div className='flex justify-center'>
          <ul>
            <li>- About Us</li>
            <li>- Careers</li>
            <li>- Terms of Service</li>
            <li>- Privacy Policy</li>
            <li>- Contact Us</li>
          </ul>
        </div>
      </div>
      <div className='flex md:w-[20%] flex-col'>
        <div className='flex justify-center text-2xl'>
          Customer Service
        </div>
        <div className='flex'>
          Need help? Contact us at support@shop.com or call us at 123-456-7890.
          We are here to assist you with orders, returns, and product inquiries.
        </div>
      </div>
      <div className='flex md:w-[20%] flex-col'>
        <div className='flex justify-center text-2xl'>
          My Account
        </div>
        <div className='flex'>
          Access your account to manage orders, track shipments, and update personal information. 
          Sign in for a personalized shopping experience.
        </div>
      </div>
    </div>
  );
}

export default Footer;
