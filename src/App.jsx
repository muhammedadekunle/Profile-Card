import React from "react";
import Header from "../Components/Header";
import Info from "../Components/Info";
import About from "../Components/About";
import Interest from "../Components/Interest";
import Footer from "../Components/Footer";

export default function App() {
  return (
    <div className="container">
      <Header />
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
