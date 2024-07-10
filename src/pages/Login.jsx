import {
  Button,
  Container,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Register from "./Register";
import axios from "axios";
import { setUserIsLogged } from "../slices/pageTagSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUserName] = useState(
    localStorage.getItem("login")
      ? JSON.parse(localStorage.getItem("login")).username
      : ""
  );
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/api/login", {
        username,
        password,
      });
      toast.success("Login Successful");
      dispatch(setUserIsLogged(true));
      if (res.data && res.data.token) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: res.data.token,
            username: username,
          })
        );
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Login Failed");
      } else if (err.request) {
        toast.error("Network error. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3001/api/signup", {
        name,
        username,
        password,
      });
      toast.success("Registration Successful");
      dispatch(setUserIsLogged(true));
      console.log(res.data.token)
      if (res.data && res.data.token) {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: res.data.token,
            username: username,
          })
        );
      }
    } catch (err) {
      if (err.response) {
        toast.error(err.response.data.message || "Login Failed");
      } else if (err.request) {
        toast.error("Network error. Please try again.");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
          }}
        >
          {isLogin ? (
            <>
              <Typography variant="h5">Login</Typography>
              <form
                style={{
                  width: "100%",
                }}
              >
                <TextField
                  label="UserName"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  color="primary"
                  sx={{
                    marginTop: "1rem",
                  }}
                  onClick={handleLogin}
                >
                  Login
                </Button>

                <Typography textAlign={"center"} m="1rem">
                  Or
                </Typography>

                <Button
                  variant="text"
                  fullWidth
                  onClick={() => setIsLogin(false)}
                >
                  Register Instead
                </Button>
              </form>
            </>
          ) : (
            // Register component Start from here _________________________________________
            <Register
              setIsLogin={setIsLogin}
              setName={setName}
              name={name}
              userName={username}
              setUserName={setUserName}
              password={password}
              setPassword={setPassword}
              handleRegister={handleRegister}
            />
          )}
        </Paper>
      </Container>
    </div>
  );
}

export default Login;
