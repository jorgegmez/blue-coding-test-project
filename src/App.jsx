import reactLogo from "./assets/react.svg";
import "./App.css";
import React from "react";

function App() {
  return (
    <React.Fragment className="w-full flex text-center">
      <h1 className="text-xl font-bold my-4">Blue Coding - Pairing Session</h1>
      <div className="flex justify-center">
        <img
          src={reactLogo}
          className="p-2 text-center w-24 h-24"
          alt="React logo"
        />
      </div>
      <p className="text-gray-400 font-bold">Waiting for instructions!</p>
    </React.Fragment>
  );
}

export default App;
