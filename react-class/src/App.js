// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
// import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true, 
        element: <NewsComponent key="general" pageSize={12} category="general"/>
      },
      {
        path: "sports",
        element: <NewsComponent key="sports" pageSize={12} category="sports"/>,
      },
      {
        path: "health",
        element: <NewsComponent key="health" pageSize={12} category="health"/>,
      },
      {
        path: "general", 
        element: <NewsComponent key="general" pageSize={12} category="general"/>
      },
      {
        path: "entertainment",
        element: <NewsComponent key="entertainment" pageSize={12} category="entertainment"/>,
      },
      {
        path: "science",
        element: <NewsComponent key="science" pageSize={12} category="science"/>,
      },
      {
        path: "business",
        element: <NewsComponent key="business" pageSize={12} category="business"/>,
      },
      {
        path: "technology",
        element: <NewsComponent key="technology" pageSize={12} category="technology"/>,
      }
    ]
  },
  
]);

export default class App extends Component {
  render() {
    return (
      <>     
      <RouterProvider router={router} />      
      </>
    )
  }
}
