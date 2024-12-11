import React, { useState } from "react";
import { Box, Button, Typography, Paper, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useCart } from "./context/CartContext";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  const handleCheckout = () => {
    setPurchaseConfirmed(true);
    clearCart();

    setTimeout(() => {
      navigate("/categories");
    }, 2000);
  };

  const handleContinueShopping = () => {
    navigate("/category/women");
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  const handleRemoveProduct = (index) => {
    removeFromCart(index);
  };

  return (
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
          padding: { xs: "10px", sm: "20px" },
          overflowY: "auto",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Bolsa de Compras
        </Typography>

        {cart.length === 0 ? (
          <Typography variant="h6" sx={{ color: "gray" }}>
            No tienes artículos en tu bolsa de compras.
          </Typography>
        ) : (
          <Box>
            {cart.map((product, index) => (
              <Paper key={index} sx={{ padding: "10px", marginBottom: "10px" }}>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body1">
                  Precio: ${product.price}
                </Typography>
                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    marginTop: "10px",
                    borderRadius: "20px",
                  }}
                  onClick={() => handleRemoveProduct(index)}
                >
                  Eliminar
                </Button>
              </Paper>
            ))}
          </Box>
        )}

        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Total: ${total > 0 ? total.toFixed(2) : "0.00"}
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              padding: "10px 20px",
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
            onClick={handleCheckout}
          >
            Finalizar Compra
          </Button>

          <Button
            variant="contained"
            sx={{
              borderRadius: "20px",
              padding: "10px 20px",
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#333",
              },
            }}
            onClick={handleContinueShopping}
          >
            Seguir Comprando
          </Button>
        </Box>

        {/* Mostrar el mensaje de confirmación de compra solo si purchaseConfirmed es true */}
        {purchaseConfirmed && (
          <Alert severity="success" sx={{ marginTop: "20px" }}>
            ¡Compra Hecha! Redirigiendo a categorías...
          </Alert>
        )}
      </Box>

      <Footer />
    </Box>
  );
}

export default Cart;
