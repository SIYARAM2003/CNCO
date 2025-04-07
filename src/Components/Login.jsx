import React, { useState } from "react";
import logimage from "./Assets/logimg.avif";
import logo from "./Assets/Logo.png";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [eyeButton, setEyeButton] = useState(false);

  const handleEyeButton = () => {
    setEyeButton(!eyeButton);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (input.email === loggedUser.email && input.password === loggedUser.password) {
      toast.success("Logged in Successfully!");  
      setTimeout(() => navigate("/"), 1000);  
    } else {
      toast.error("Wrong Email or Password!");  
    }
  };

  return (
    <div className="bg-white w-full h-[93vh] flex justify-center items-center overflow-hidden">
      <form onSubmit={handleLogin} className="w-[80vw] h-[80vh] flex justify-center items-center">
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center lg:w-[30rem] md:w-[25rem] sm:w-[15rem] h-[40rem] gap-9">
            <img src={logo} alt="Logo" className="w-[20rem]" />
            <div className="flex flex-col gap-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                placeholder="User@gmail.com"
                className="border bg-gray-100 outline-none pl-3 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem] text-slate-600"
                required
              />
            </div>
            <div className="flex flex-col gap-3 relative">
              <label>Password</label>
              <input
                type={eyeButton ? "text" : "password"}
                name="password"
                value={input.password}
                onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                placeholder="At least 8 characters"
                className="border bg-gray-100 outline-none pl-3 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem] text-slate-600"
                required
              />
              <div className="absolute right-4 top-12 cursor-pointer">
                {eyeButton ? (<IoEyeOff onClick={handleEyeButton} size={20} />) : (<IoEye onClick={handleEyeButton} size={20} />)}
              </div>
			  <Link to='/forgotPassword'>
              	<span className="text-green-500 text-right cursor-pointer">Forgot Password?</span>
			  </Link>
            </div>
            <button type="submit" className="bg-fuchsia-500 h-[3rem] hover:bg-fuchsia-600 lg:w-[30rem] md:w-[25rem] sm:w-[18rem] flex items-center justify-center text-[21px] text-white cursor-pointer">
              Login
            </button>
            <ToastContainer position="top-right top-[5rem]" autoClose={1000} />
            <div>
              <span>
                Don't have an account?
                <Link to="/signUp" className="text-[#316dd4] cursor-pointer"> Register</Link>
              </span>
            </div>
          </div>
          <div className="h-[40rem] w-[35rem] bg-[#F5F5F2] items-center justify-center logImage">
            <img src={logimage} alt="Login" className="w-[35rem] h-[40rem]" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
