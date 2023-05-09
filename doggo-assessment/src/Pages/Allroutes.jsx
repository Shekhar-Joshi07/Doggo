import React from "react";
import Home from "../Components/Home";
import List from "../Components/List";
import Track from "../Components/Track";
import { Routes, Route } from "react-router-dom";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/list" element={<List />}></Route>
      <Route path="/track" element={<Track />}></Route>
    </Routes>
  );
};

export default Allroutes;
