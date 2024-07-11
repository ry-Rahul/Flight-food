import React, { lazy, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { setDataIntoStore } from "./slices/mealsSlice";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  const user = useSelector((state) => state.page.user);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("login"));

    // Check if localData is not null
    if (localData && localData.token) {
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${localData.token}`,
      };
      axios
        .get("https://foodflight-backend.onrender.com/api/data", { headers: headers })
        .then((res) => {
          setData(res.data.message);
          // toast.success("User data fetched successfully");
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to fetch meal data");
        });
    } else {
      toast.error("User not logged in. Please log in to continue.");
    }
  }, []);

  useEffect(() => {
    dispatch(setDataIntoStore(data));
  }, [data, dispatch]);

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
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
