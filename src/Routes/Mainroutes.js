import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../Pages/Posts/posts";
import Auth from "../Pages/Auth/Auth";

function MainRoutes() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Routes>
      <Route path="/" element={<Auth />}>
        <Route path="login" element={<Auth />} />
      </Route>
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}

export default MainRoutes;
