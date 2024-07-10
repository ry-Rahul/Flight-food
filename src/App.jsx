import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Auth/Auth";
import { Provider, useSelector } from "react-redux";
import store from "./slices/Store.js";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));


function App() {
  // const user = useSelector((state) => state.page.user);

  const user = true;
  return (
    <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute user={!user} redirect="/">
                <Login  />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
