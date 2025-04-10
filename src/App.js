import React, { useEffect, useState } from "react";
import MainRoutes from "./Components/MainRoutes";
import Header from "./Components/Header";
import { useSelector } from "react-redux";


function App() {
	 const [isLoggedIn, setIsLoggedIn] = useState(false);
	 const cartItems = useSelector((state) => state.cart.cartItems);
	 
	 
	  useEffect(() => {
		const user = localStorage.getItem("isLoggedIn") === "true";
		setIsLoggedIn(user);
	  }, []);

	  useEffect(() => {
		if (isLoggedIn) {
		  localStorage.setItem("cartItems", JSON.stringify(cartItems));
		} else {
		  localStorage.removeItem("cartItems");
		}
	  }, [cartItems, isLoggedIn]);
	

  return (
    <>
	<Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
	<MainRoutes  setIsLoggedIn={setIsLoggedIn}/>
	</>
 
  );
}

export default App;
