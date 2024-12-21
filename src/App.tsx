import React from "react";
import Login from "./Components/Login";
import MyLogin from "./Components/Mylogin";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import Products from "./Components/Products";
import Contact from "./Components/Contact";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyLogin />} />
          <Route path="/stpeter/home" element={<Home />} />
          <Route path="/prd" element={<Products />} />
          <Route path="/cont" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}