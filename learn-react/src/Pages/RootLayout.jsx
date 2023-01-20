import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function RootLayout() {
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
            <Outlet />
        </>
    )
}
