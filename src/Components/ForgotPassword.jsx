import React from "react";
import logimage from "./Assets/logimg.avif";
import logo from "./Assets/Logo.png";

function ForgotPassword() {
	function handleSubmit(e){
		e.preventDefault();
	}
  return (
    <div className="bg-white w-full h-[93vh] flex justify-center items-center overflow-hidden">
      <form className="w-[80vw] h-[80vh] flex justify-center items-center" onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <div className="flex flex-col items-center justify-center lg:w-[30rem] md:w-[25rem] sm:w-[15rem] h-[40rem] gap-9">
            <img src={logo} alt="Logo" className="w-[20rem]" />
            <div className="flex flex-col gap-3">
              <label className="text-[#375280] text-md font-medium">
                Enter Your Register Mail
              </label>
              <input
                type="email"
                placeholder="Enter Your Register Mail"
                className="border bg-gray-100 outline-none pl-3 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem] text-slate-600"
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[#375280] text-md font-medium">
			  Password
              </label>
              <input
                type="password"
                placeholder="Enter Random Password"
                className="border bg-gray-100 outline-none pl-3 h-[3rem] lg:w-[30rem] md:w-[25rem] sm:w-[18rem] text-slate-600"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-fuchsia-500 h-[3rem] hover:bg-fuchsia-600 w-full lg:w-[30rem] md:w-[25rem] flex items-center justify-center text-[21px] text-white cursor-pointer"
            >
              Reset Password
            </button>
            <div></div>
          </div>
          <div className="h-[40rem] w-[35rem] bg-[#F5F5F2] items-center justify-center logImage">
            <img src={logimage} alt="Login" className="w-[35rem] h-[40rem]" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
