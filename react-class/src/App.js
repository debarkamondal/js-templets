// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewsComponent pageSize={20} category="general"/>,
  },
  {
    path: "/sports",
    element: <NewsComponent pageSize={20} category="sports"/>,
  },
  {
    path: "/health",
    element: <NewsComponent pageSize={20} category="health"/>,
  }
]);

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <RouterProvider router={router} />
      <Outlet/>
      </>
    )
  }
}
