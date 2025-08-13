import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import BlogPost from "../pages/BlogPost";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<BlogPost />} />
    </Routes>
  );
};

export default AppRouter;
