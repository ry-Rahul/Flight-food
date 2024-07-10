import React, { useState } from "react";
import {
  Button,
  Container,
  Input,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function Register({
  setIsLogin,
  name,
  setName,
  userName,
  setUserName,
  password,
  setPassword,
  handleRegister,
}) {


    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
  return (
    <>
      <Typography variant="h5">Sign Up</Typography>
      <form
        action=""
        style={{
          width: "100%",
        }}
        onSubmit={handleRegister}
      >
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="UserName"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          value={userName}
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
          onChange={handlePassword}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          sx={{
            marginTop: "1rem",
          }}
        >
          Sign Up
        </Button>

        <Typography textAlign={"center"} m="1rem">
          Or
        </Typography>

        <Button variant="text" fullWidth onClick={() => setIsLogin(true)}>
          Login Instead
        </Button>
      </form>
    </>
  );
}

export default Register;
