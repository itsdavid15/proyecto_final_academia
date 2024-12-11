import React from "react";
import { Box } from "@mui/material";

function Header() {
  return (
    <Box
      component="header"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: 2,
        textAlign: "center",
        borderBottom: "2px solid #000", 
      }}
    >
      <img
        src="/assets/LogoTienda.png"
        alt="Logo"
        style={{
          height: 80, 
          width: 80, 
          borderRadius: "50%", 
          objectFit: "cover",
        }}
      />
    </Box>
  );
}

export default Header;
