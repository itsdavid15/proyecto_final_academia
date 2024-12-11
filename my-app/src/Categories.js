import React from "react";
import { Box, Paper } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

function CategoriesPage() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  const commonStyle = {
    width: "48%",
    height: "400px",
    padding: "20px",
    borderRadius: "16px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    cursor: "pointer",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)",
    },
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "700px",
            marginBottom: "16px",
            gap: "20px",
          }}
        >
          {/* Categoría Mujer */}
          <Paper
            sx={{
              ...commonStyle,
              backgroundImage: "url(/assets/CatMujer.png)",
            }}
            onClick={() => handleCategoryClick("women")}
          />

          {/* Categoría Hombre */}
          <Paper
            sx={{
              ...commonStyle,
              backgroundImage: "url(/assets/CatHom.png)",
            }}
            onClick={() => handleCategoryClick("men")}
          />
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

export default CategoriesPage;
