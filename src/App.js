import React from "react";
import Navbar from "../src/components/Navbar.js";
import MainSection from "./components/MainSection.js";

function App() {
  return (
    <div class="relative min-h-screen text-white bg-[#091620] lg:py-10">
      <div class="lg:px-16 2xl:px-[20%] min-[1800px]:px-[10%] min-[2200px]:px-[25%]">
        <Navbar />
        <MainSection />
      </div>
    </div>
  );
}

export default App;
