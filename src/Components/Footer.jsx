import React from "react";
import logo from "./Assets/Logo.png";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-200 py-5">
      <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-8  ">
        <div>
          <img src={logo} alt="" />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Category</h3>
          <ul className="space-y-2 flex flex-col">
            <Link to="/" className="hover:text-[#375280] text-gray-500">All Category</Link>
            <Link to="/kids" className="hover:text-[#375280] text-gray-500">Kids</Link>
            <Link to="/men" className="hover:text-[#375280] text-gray-500">Men</Link>
            <Link to="/women" className="hover:text-[#375280] text-gray-500">Women</Link>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 ">Follow Us</h3>
          <div className="flex space-x-4">
              <div className="text-slate-600 cursor-pointer hover:text-blue-500"><FaFacebook size={25}/></div>
              <div className="text-slate-600 cursor-pointer hover:text-red-500"><FaInstagram size={25} /></div>
              <div className="text-slate-600 cursor-pointer hover:text-blue-500"><FaTwitter size={25} /></div>
              <div className="text-slate-600 cursor-pointer hover:text-blue-500"><FaLinkedin size={25} /></div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-400 mb-4">
            Get updates on new arrivals and special offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-gray-800 outline-none"
            />
            <button className="bg-fuchsia-600 text-white px-4 py-2 hover:bg-fuchsia-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-[#375280] mt-8 border-t border-gray-400 pt-4">
        <p>
          &copy; {new Date().getFullYear
		  ()} Siyaram Saini
        </p>
      </div>
    </footer>
  );
};

export default Footer;
