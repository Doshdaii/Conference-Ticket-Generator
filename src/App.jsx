import React from "react";
import Home from "../Pages/Home/Home.jsx";
import "./App.css";
import { Routes, Route } from "react-router";
import Ticket from "../Pages/Ticket/Ticket.jsx";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
};

export default App;
