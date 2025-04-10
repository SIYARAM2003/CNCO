import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQty, increaseQty } from "./Redux/Action";
import emptyCart from "./Assets/emptycart.avif";
import { Link } from "react-router-dom";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { clearCart } from "./Redux/Action";

function AddToCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1);

  const [address, setAddress] = useState({
    First_Name: "",
    Last_Name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    Pin_Code: "",
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (Object.values(address).some((val) => val.trim() === "")) {
      toast.error("Please fill all the field");
      return;
    }
    setStep(2);
  };

  const handlePlaceOrder = () => {
    const newOrder = {
      items: cartItems,
      address: address,
      orderDate: new Date().toLocaleString(),
    };
    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
    dispatch(clearCart());
    setStep(3);
  };

  const navigate = useNavigate();

  const closeModal = () => {
    setShowPopup(false);
    setStep(1);
    if (step === 3) {
      navigate("/");
    }
  };

  return cartItems.length === 0 ? (
    <div className="text-center mt-10">
      <img src={emptyCart} alt="Empty" className="mx-auto" />
      <div className="flex justify-center items-center">
        <Link to="/">
          <div className="relative bg-fuchsia-500 rounded-full p-1.5 w-[11rem] text-white flex items-center justify-center gap-3 hover:bg-fuchsia-600">
            <BsArrowLeftShort
              size={25}
              className="text-fuchsia-600 bg-white rounded-full w-[2rem] h-[2rem] hover:scale-105"
            />
            <span>Shopping Now</span>
          </div>
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <div className="text-2xl font-semibold font-[Poppins] mb-4 bg-fuchsia-600 h-[3rem] text-[#e1e2e4] flex items-center px-4">
        Your Cart
      </div>
      {cartItems.map((item, id) => (
        <div
          key={id}
          className="flex items-center justify-between border-b py-3 px-3"
        >
          <div className="flex gap-4 items-center">
            <img src={item.image_src} alt={item.name} className="w-[80px]" />
            <div>
              <h4 className="font-[Lato] text-[17px]">{item.name}</h4>
              <p className="text-[#2f4c7c] font-mono text-[17px]">
                ₹
                {parseFloat(item.price.toString().replace(/[^\d.]/g, "")) *
                  item.qty}
              </p>
              <p className="text-slate-500">Qty: {item.qty}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 hover:bg-slate-200 bg-slate-100 rounded-full p-1.5 w-[8rem] justify-center text-center text-[17px]">
            <button
              className="px-2  hover:text-green-500 text-2xl"
              onClick={() => dispatch(decreaseQty(item.id))}
            >
              -
            </button>
            <span className="px-2 text-gray-500">{item.qty}</span>
            <button
              className="px-2  hover:text-green-500"
              onClick={() => dispatch(increaseQty(item.id))}
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="text-right font-semibold text-lg text-fuchsia-600 border-t pt-2 pr-5">
        Total: ₹
        {cartItems.reduce((total, item) => {
          const price = parseFloat(
            item.price.toString().replace(/[^\d.]/g, "")
          );
          return total + price * item.qty;
        }, 0)}
      </div>
      <div className="flex justify-end mt-[10rem] lg:mr-3 md:mr-3 sm:mr-3">
        <div
          className="bg-fuchsia-600 hover:bg-fuchsia-700 cursor-pointer text-white rounded-md w-[20rem] h-[3rem] flex justify-center items-center font-semibold"
          onClick={() => setShowPopup(true)}
        >
          Order Now
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[30rem] max-h-[80vh] overflow-y-auto ">
            {step === 1 && (
              <>
                <h2 className="text-xl font-semibold font-[Poppin] mb-5 text-center text-fuchsia-600">
                  Delivery Details
                </h2>
                <div>
                  <input
                    type="text"
                    name="First_Name"
                    placeholder="Fisrt Name"
                    value={address.First_Name}
                    onChange={handleChange}
                    className="border p-2 mb-3 w-full rounded outline-none bg-slate-100"
                  />
                  <input
                    type="text"
                    name="Last_Name"
                    placeholder="Full Name"
                    value={address.Last_Name}
                    onChange={handleChange}
                    className="border p-2 mb-3 w-full rounded outline-none bg-slate-100"
                  />
                  <input
                    type="text"
                    name="email"
                    placeholder="Your Mail"
                    value={address.email}
                    onChange={handleChange}
                    className="border p-2 mb-3 w-full rounded outline-none bg-slate-100"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={address.phone}
                    onChange={handleChange}
                    className="border p-2 mb-3 w-full rounded outline-none bg-slate-100"
                  />
                  <input
                    type="text"
                    required
                    name="address"
                    placeholder="Address with House no."
                    value={address.address}
                    onChange={handleChange}
                    className="border p-2 mb-3 w-full rounded outline-none bg-slate-100"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={address.city}
                    onChange={handleChange}
                    className="border p-2 mb-3 w-full rounded outline-none bg-slate-100"
                  />
                  <input
                    type="text"
                    name="Pin_Code"
                    placeholder="Pin Code"
                    value={address.Pin_Code}
                    onChange={handleChange}
                    className="border p-2 mb-4 w-full rounded outline-none bg-slate-100"
                  />
                </div>
                <div className="flex justify-evenly items-center mt-6 w-full">
                  <button
                    className="bg-fuchsia-600 rounded-full w-[8rem] text-white px-6 py-1 hover:bg-fuchsia-700 flex items-center justify-around"
                    onClick={closeModal}
                  >
					<BsArrowLeftShort
                      size={25}
                      className="text-white  rounded-full w-6 h-6 hover:scale-105 "
					  />
					  Back
                  </button>

                  <button
                    className="bg-fuchsia-600 gap-2 w-[8rem] rounded-full text-white px-6 py-1 hover:bg-fuchsia-700 flex items-center justify-around relative"
                    onClick={handleNext}
                  >
					  Next
                    <BsArrowRightShort
                      size={25}
                      className="text-white  rounded-full w-6 h-6 hover:scale-105 "
                    />
                  </button>

                  <ToastContainer position="top-right" autoClose={1000} />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-xl font-semibold mb-4 text-center text-fuchsia-600">
                  Order Summary
                </h2>
                <div className="mb-4">
                  {cartItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between mb-2 border-b pb-1"
                    >
                      <span>
                        {item.name} (x{item.qty})
                      </span>
                      <span>{item.price}</span>
                    </div>
                  ))}
                </div>
                <div className="mb-4 text-sm text-gray-600 space-y-1">
                  <p>
                    <strong>Fisrt Name:</strong> {address.First_Name}
                  </p>
                  <p>
                    <strong>Last Name:</strong> {address.Last_Name}
                  </p>
                  <p>
                    <strong>Mail:</strong> {address.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {address.phone}
                  </p>
                  <p>
                    <strong>City:</strong> {address.city}
                  </p>
                  <p>
                    <strong>Pin Code:</strong> {address.Pin_Code}
                  </p>
                  <p>
                    <strong>Address:</strong> {address.address}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-gray-300 px-4 py-2 text-slate-600 rounded-full w-[8rem] hover:bg-gray-200 hover:text-fuchsia-500"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </button>
                  <button
                    className="bg-fuchsia-500 text-white px-4 py-2 w-[8rem] rounded-full hover:bg-green-500"
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </>
            )}

            {step === 3 && (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-green-600 mb-4 font-mono">
                  Order Placed Successfully!
                </h2>
                <p className="text-gray-600 mb-6">
                  Thank you for your purchase. We'll get your items to you soon.
                </p>
                <button
                  className="bg-fuchsia-600 text-white px-6 py-2 rounded-full w-[8rem] hover:bg-fuchsia-700"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AddToCart;
