import React, { useEffect, useState } from "react";
import MainRoutes from "./Components/MainRoutes";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";

function App() {
	 const [isLoggedIn, setIsLoggedIn] = useState(false);

	  useEffect(() => {
		const user = localStorage.getItem("isLoggedIn"=== "false");
		setIsLoggedIn(!!user);
	  }, []);
  return (
    <Provider store={store}>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <MainRoutes  setIsLoggedIn={setIsLoggedIn}/>
    </Provider>
  );
}

export default App;
