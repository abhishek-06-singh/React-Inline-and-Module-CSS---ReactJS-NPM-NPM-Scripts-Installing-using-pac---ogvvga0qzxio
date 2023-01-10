import React from "react";
import "./App.css";
import styles from "./appStyles.module.css";

const App = () => {
  const sucess = {
    color: "green",
    fontSize: "50px",
  };
  const heading = {
    color: "red",
    fontSize: "50px",
  };
  return (
    <div id="main">
      <h1 style={sucess}>Success</h1>
      <h1 id="error" style={heading}>
        Error
      </h1>
    </div>
  );
};

export default App;
