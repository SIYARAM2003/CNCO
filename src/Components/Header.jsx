import React, { useEffect, useState, useRef } from "react";
import logo from "./Assets/Logo.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { FaRegCircleUser } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./Redux/Action";

function Header({ isLoggedIn, setIsLoggedIn }) {
  const [popup, setPopup] = useState(false);
  const [list, setList] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQty = cartItems.length;
  const navigate = useNavigate();
  const popupRef = useRef(null);
  const dispatch = useDispatch();
  
  const handlePopup = () => {
    setPopup(!popup);
  };

  const handleList = () => {
    setList(!list);
  };

  const handleLogout = () => {
	dispatch(clearCart());
    // localStorage.removeItem("user");
    localStorage.removeItem("orders");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    setPopup(false);
    navigate("/login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
      }
    };
    if (popup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popup]);

  useEffect(() => {
    document.body.style.overflow = list ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [list]);

  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between items-center bg-slate-100 shadow-md px-5 w-full relative">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-[8rem] logo" />
        </Link>
        <div className="gap-10 text-gray-600 headerCategory">
          <div className="flex gap-10 text-[#375280] ">
            <Link
              to="/"
              className="hover:bg-slate-200 rounded-full p-1.5 w-[7rem] hover:text-fuchsia-500 text-center text-[17px]"
            >
              Home
            </Link>
            <Link
              to="/kids"
              className="hover:bg-slate-200 rounded-full p-1.5 w-[7rem] hover:text-fuchsia-500 text-center text-[17px]"
            >
              Kids
            </Link>
            <Link
              to="/men"
              className="hover:bg-slate-200 rounded-full p-1.5 w-[7rem] hover:text-fuchsia-500 text-center text-[17px]"
            >
              Men
            </Link>
            <Link
              to="/women"
              className="hover:bg-slate-200 rounded-full p-1.5 w-[7rem] hover:text-fuchsia-500 text-center text-[17px]"
            >
              Women
            </Link>
          </div>
        </div>
        <div className="flex gap-10">
          {isLoggedIn && (
            <div className="relative">
              <Link to="/cart">
                <BsCart2
                  size={25}
                  className="fill-[#375280] cursor-pointer hover:fill-green-500"
                />
                {totalQty > 0 && (
                  <span className="absolute top-[-8px] ml-4 bg-fuchsia-500 rounded-full text-white w-[18px] h-[18px] flex items-center justify-center text-xs">
                    {totalQty}
                  </span>
                )}
              </Link>
            </div>
          )}
          <span>
            <FaRegCircleUser
              size={25}
              className="fill-[#375280] cursor-pointer hover:fill-green-500"
              onClick={handlePopup}
            />
          </span>
          {popup && (
            <div
              ref={popupRef}
              className="absolute top-[4.2rem] right-3 bg-slate-100 flex flex-col shadow-lg transition-all duration-200 ease-in-out"
            >
              {isLoggedIn ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="h-[3rem] w-[7rem] hover:bg-slate-200 hover:text-fuchsia-500 text-center text-[17px]"
                  >
                    Logout
                  </button>
                  <Link
                    to="/yourOrders"
                    onClick={() => setPopup(false)}
                    className="h-[3rem] w-[7rem] hover:bg-slate-200 hover:text-fuchsia-500 text-center text-[17px] pt-2"
                  >
                    Your Orders
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    onClick={() => setPopup(false)}
                    to="/login"
                    className="h-[3rem] w-[6rem] flex justify-center items-center text-slate-700 hover:bg-green-500 hover:text-white"
                  >
                    Login
                  </Link>
                  <hr />
                  <Link
                    onClick={() => setPopup(false)}
                    to="/signUp"
                    className="h-[3rem] w-[6rem] flex justify-center items-center text-slate-700 hover:bg-yellow-400 hover:text-white"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          )}

          <span className="hidden hamburgerButton">
            <RxHamburgerMenu
              size={25}
              className="fill-gray-600 cursor-pointer"
              onClick={handleList}
            />
          </span>
        </div>
      </div>

      {list && (
        <div className="absolute top-[67px] right-0 bg-slate-100 w-[250px] h-screen flex flex-col items-start p-5 shadow-md">
          <button
            className="self-end hover:text-red-500 text-2xl mb-5 cursor-pointer"
            onClick={handleList}
          >
            <RxCross2 />
          </button>
          <div className="flex flex-col gap-10 text-gray-600">
            <Link to="/" className="hover:text-green-500">
              Home
            </Link>
            <Link to="/kids" className="hover:text-green-500">
              Kids
            </Link>
            <Link to="/men" className="hover:text-green-500">
              Men
            </Link>
            <Link to="/women" className="hover:text-green-500">
              Women
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
