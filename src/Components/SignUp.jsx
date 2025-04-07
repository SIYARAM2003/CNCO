import React, { useState } from "react";
import signimage from "./Assets/signimg.jpg";
import logo from "./Assets/Logo.png";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function SignUp({ handleLogin }) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prevInput) => ({...prevInput, [name]: value,}));
  }
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    toast.success("Registered Successfully!", {
      position: "top-right",
      autoClose: 2000,
    });
    setTimeout(() => navigate("/login"), 2000); 
  }

  return (
    <div className="bg-white w-full h-[93vh] flex justify-center items-center">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="w-[80vw] h-[84vh] flex justify-center items-center">
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center lg:w-[35rem] md:w-[20rem] sm:w-[14rem] h-[48rem] gap-5">
            <img src={logo} alt="Logo" className="w-[20rem]" />
            <div className="flex flex-col gap-3">
              <label>First Name</label>
              <input
                required
                type="text"
                name="firstname"
                value={input.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className="border bg-gray-100 outline-none pl-3 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem] text-slate-600"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Last Name</label>
              <input
                required
                type="text"
                name="lastname"
                value={input.lastname}
                onChange={handleChange}
                placeholder="Last Name"
                className="border bg-gray-100 outline-none pl-3 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem] text-slate-600"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Email</label>
              <input
                required
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                placeholder="Username@gmail.com"
                className="border bg-gray-100 outline-none pl-3 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem]  text-slate-600"
              />
            </div>
            <div className="flex flex-col gap-3 relative">
              <label>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                value={input.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                className="border bg-gray-100 outline-none pl-3 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem] text-slate-600"
              />
              <div className="absolute right-4 top-12 cursor-pointer">
                {showPassword ? (
                  <IoEyeOff onClick={handleClick} size={20} />
                ) : (
                  <IoEye onClick={handleClick} size={20} />
                )}
              </div>
            </div>
            <div className="flex gap-6">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="text-gray-400 sm:w-[14rem] lg:w-[100%] md:w-[100%] text-[17px]">
                I agree to the <span className="text-[#375280]">Terms & Conditions</span> and <span className="text-[#375280]">Privacy Statement.</span>
              </label>
            </div>
            <button type="submit" className="bg-fuchsia-500 hover:bg-fuchsia-600 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem] flex items-center justify-center text-[21px] text-white cursor-pointer mt-5">
              Sign Up
            </button>
            <div>
              <span>
                Already have an account?
                <Link to="/login" className="text-green-600 cursor-pointer ml-1" onClick={handleLogin}>
                  Login
                </Link>
              </span>
            </div>
          </div>
          <div className="h-[48rem] w-[35rem] items-center justify-center signImage">
            <img src={signimage} alt="Sign Up" className="w-[35rem] h-[40rem]" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
