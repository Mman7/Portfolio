import { useState } from "react";
import "./App.scss";
import BackgroundText from "./components/BackgroundText";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <BackgroundText />
      <Homepage />
    </div>
  );
}

export default App;
