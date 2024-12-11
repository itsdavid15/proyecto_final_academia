import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Credenciales constantes
  const validUser = "usuario@example.com";
  const validPassword = "123456";

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  const handleLogin = () => {
    if (email === validUser && password === validPassword) {
      setError("");
      console.log("Inicio de sesión exitoso");
      navigate("/categories");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f5f5f5",
        padding: "0",
      }}
    >
      {/* Header */}
      <Header />

      <Box
        component="main"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            alignSelf: "flex-start",
            marginLeft: "10px",
            fontFamily: "inherit",
          }}
        >
          Iniciar sesión
        </Typography>

        {/* Mensaje de error */}
        {error && (
          <Alert
            severity="error"
            sx={{ width: "100%", maxWidth: "600px", marginBottom: "16px" }}
          >
            {error}
          </Alert>
        )}

        {/* Inputs */}
        <TextField
          label="Dirección Email"
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "16px", maxWidth: "600px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Contraseña"
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          sx={{ marginBottom: "16px", maxWidth: "600px" }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Botón de inicio de sesión */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px",
            borderRadius: "50px",
            maxWidth: "600px",
            fontFamily: "inherit",
          }}
          onClick={handleLogin}
        >
          INICIAR SESIÓN
        </Button>
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}

export default LoginPage;
