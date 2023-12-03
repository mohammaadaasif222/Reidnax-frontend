import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Header from "./components/Header"
import NotFound from "./pages/NotFound";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
