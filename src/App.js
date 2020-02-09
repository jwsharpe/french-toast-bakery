import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Pictures from "./components/Pictures";
import Footer from "./components/Footer";
import Information from "./components/Information";

function App() {
  return (
    <div className="bg-gray-400">
      <Header />
      <Hero />
      <Information />
      <Pictures />
      <Footer />
    </div>
  );
}

export default App;
