import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <Header />
        <Home />
      </div>
    </>
  );
};

export default App;
