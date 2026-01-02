import { useState } from "react";
import "./App.css";
import React from "react";
import Registraion_form from "./Components/Registraion_form";

function App() {
  return (
     <section className="flex bg-amber-100 justify-center items-center w-screen h-screen">
      <Registraion_form />
     </section>
  );
}

export default App;
