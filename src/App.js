import "./App.css";
import React from "react";
import Header from "./component/Header";
import Ourproduct from "./component/Ourproduct";
import Howitworks from "./component/Howitworks";
import Footer from "./component/Footer";
import Meetteam from "./component/Meetteam";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Ourproduct />
      <Howitworks />
      <Meetteam />
      <Footer />
    </div>
  );
}

export default App;
