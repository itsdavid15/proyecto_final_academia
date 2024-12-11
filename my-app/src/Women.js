import React, { useState } from "react";
import { Box, Button, Typography, Paper } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

function CatalogoMujer() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  const handleProductClick = (index) => {
    setSelectedProduct(index === selectedProduct ? null : index);
  };

  const handleAddToCart = (product, price) => {
    if (selectedProduct === product) {
      addToCart({ product, price });
      alert("Producto agregado al carrito");
      setSelectedProduct(null);
    } else {
      alert("Primero selecciona el producto para agregar al carrito");
    }
  };

  const handleCategoryChange = (category) => {
    navigate(`/category/${category}`);
  };

  // Lista de categorías de productos con sus respectivos precios
  const categories = [
    {
      name: "CAZADORAS Y BLAZERS",
      products: [
        { id: 1, price: 60 },
        { id: 2, price: 50 },
        { id: 3, price: 80 },
        { id: 4, price: 65 },
      ],
      images: [
        "/assets/product_1.png",
        "/assets/product_2.png",
        "/assets/product_3.png",
        "/assets/product_4.png",
      ],
    },
    {
      name: "VESTIDOS",
      products: [
        { id: 5, price: 40 },
        { id: 6, price: 55 },
        { id: 7, price: 65 },
        { id: 8, price: 70 },
      ],
      images: [
        "/assets/product_5.png",
        "/assets/product_6.png",
        "/assets/product_7.png",
        "/assets/product_8.png",
      ],
    },
    {
      name: "ABRIGOS Y TRENCH",
      products: [
        { id: 9, price: 80 },
        { id: 10, price: 95 },
        { id: 11, price: 100 },
        { id: 12, price: 75 },
      ],
      images: [
        "/assets/product_9.png",
        "/assets/product_10.png",
        "/assets/product_11.png",
        "/assets/product_12.png",
      ],
    },
    {
      name: "JERSÉIS Y CARDIGANS",
      products: [
        { id: 13, price: 80 },
        { id: 14, price: 90 },
        { id: 15, price: 95 },
        { id: 16, price: 85 },
      ],
      images: [
        "/assets/product_13.png",
        "/assets/product_14.png",
        "/assets/product_15.png",
        "/assets/product_16.png",
      ],
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "150vh",
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
        {/* Títulos y navegación entre categorías */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "inherit",
                fontWeight: "bold",
                cursor: "pointer",
                paddingBottom: "6px",
                marginRight: "20px",
                borderBottom: "2px solid black",
              }}
              onClick={() => handleCategoryChange("women")}
            >
              Mujer
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "inherit",
                fontWeight: "bold",
                cursor: "pointer",
                paddingBottom: "6px",
              }}
              onClick={() => handleCategoryChange("men")}
            >
              Hombre
            </Typography>
          </Box>

          <ShoppingBagIcon
            sx={{ cursor: "pointer", fontSize: 30 }}
            onClick={() => navigate("/cart")}
          />
        </Box>

        {/* Contenido principal: Categorías de productos */}
        {categories.map((category, categoryIndex) => (
          <Box key={categoryIndex}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              {category.name}
            </Typography>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(4, 1fr)",
                },
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              {category.products.map((product, index) => (
                <Paper
                  key={product.id}
                  sx={{
                    position: "relative",
                    width: "300px",
                    height: "340px",
                    borderRadius: "10px",
                    backgroundImage: `url(${category.images[index]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    cursor: "pointer",
                    border:
                      selectedProduct === product.id
                        ? "4px solid black"
                        : "none",
                    "&:hover": {
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                  onClick={() => handleProductClick(product.id)}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: "10px",
                      left: "10px",
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <ShoppingBagIcon
                      sx={{ cursor: "pointer", fontSize: 30 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product.id, product.price);
                      }}
                    />
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Footer />
    </Box>
  );
}

export default CatalogoMujer;
