// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light");
  const toggleDarkMode = (event) => {
    if (event.target.checked) {
      setMode("dark");
      document.body.style.backgroundColor = "#15181a";
      document.body.style.color="white";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color="black";
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleDarkMode={toggleDarkMode} />
      <div className="container">
        <TextForm heading="Enter the text for anlysis" />
      </div>
    </>
  );
}

export default App;
