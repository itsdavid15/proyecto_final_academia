import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import LoginButton from "./components/LoginButton";
import Footer from "./components/Footer";
import { Box, Typography } from "@mui/material";
import LoginPage from "./Login";
import CategoriesPage from "./Categories";
import MenCatalog from "./Men";
import WomenCatalog from "./Women";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          {/* Ruta para la página de cuenta */}
          <Route
            path="/"
            element={
              <Box
                sx={{
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  backgroundColor: "#f5f5f5",
                }}
              >
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
                    Cuenta
                  </Typography>
                  <LoginButton />
                </Box>
                <Footer />
              </Box>
            }
          />
          {/* Ruta para la página de categorías */}
          <Route path="/categories" element={<CategoriesPage />} />

          {/* Ruta para el catálogo de mujeres */}
          <Route path="/category/women" element={<WomenCatalog />} />

          {/* Ruta para el catálogo de hombres */}
          <Route path="/category/men" element={<MenCatalog />} />

          {/* Ruta para la página de inicio de sesión */}
          <Route path="/login" element={<LoginPage />} />

          {/* Ruta para la página de carro de compras */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
