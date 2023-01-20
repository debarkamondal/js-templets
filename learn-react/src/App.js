// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import { Route, Routes } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const toggleDarkMode = (event) => {
    if (event.target.checked) {
      setMode("dark");
      document.body.style.backgroundColor = "#15181a";
      document.body.style.color = "white";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<TextForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
