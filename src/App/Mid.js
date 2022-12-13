import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Login from "./components/form/login";
import Registration from "./components/form/register/register";

const Mid = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </>
  );
};

export default Mid;
