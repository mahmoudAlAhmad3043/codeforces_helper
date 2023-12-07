import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Error_Page from './Error_Page';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import App from './App';

const router = createBrowserRouter([
  {
    path:'/codeforces_helper',
    element:<App/>
  },
  {
    path:'/home',
    element: <Home/>
  },{
    path:'/login',
    element:<Login/>
  },{
    path:'/error',
    element:<Error_Page />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
