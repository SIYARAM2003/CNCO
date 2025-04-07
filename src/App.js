import React from "react";
import MainRoutes from "./Components/MainRoutes";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";

function App() {
  return (
    <Provider store={store}>
      <Header />
      <MainRoutes />
    </Provider>
  );
}

export default App;
