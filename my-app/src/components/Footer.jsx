import React from "react";
import { Box, Typography, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        padding: 2,
        backgroundColor: "#000",
        color: "#f5f5f5",
        fontFamily: "inherit",
        width: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
        fontSize: "0.75rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Sección de Ayuda */}
        <Box sx={{ marginBottom: 4, width: "auto", maxWidth: "300px", ml: 4 }}>
          <Typography
            variant="h6"
            sx={{ color: "#f5f5f5", marginBottom: 1, fontFamily: "inherit" }}
          >
            AYUDA
          </Typography>
          <Link
            href="#"
            sx={{
              display: "block",
              marginBottom: 0.5,
              color: "#f5f5f5",
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            PERDÍ MI CUENTA
          </Link>
          <Link
            href="#"
            sx={{
              display: "block",
              marginBottom: 0.5,
              color: "#f5f5f5",
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            PREGUNTAS FRECUENTES
          </Link>
          <Link
            href="#"
            sx={{
              display: "block",
              marginBottom: 0.5,
              color: "#f5f5f5",
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            CÓMO REGISTRARME
          </Link>
          <Link
            href="#"
            sx={{
              display: "block",
              marginBottom: 0.5,
              color: "#f5f5f5",
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            EVITAR ESTAFAS COMPRANDO ONLINE
          </Link>
        </Box>

        {/* Sección de Empresa */}
        <Box sx={{ marginBottom: 4, width: "auto", maxWidth: "300px" }}>
          <Typography
            variant="h6"
            sx={{ color: "#f5f5f5", marginBottom: 1, fontFamily: "inherit" }}
          >
            EMPRESA
          </Typography>
          <Link
            href="#"
            sx={{
              display: "block",
              marginBottom: 0.5,
              color: "#f5f5f5",
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            ¿QUIÉNES SOMOS?
          </Link>
          <Link
            href="#"
            sx={{
              display: "block",
              marginBottom: 0.5,
              color: "#f5f5f5",
              textDecoration: "none",
              fontFamily: "inherit",
            }}
          >
            ¡TRABAJA CON NOSOTROS!
          </Link>
        </Box>

        {/* Sección de Síguenos */}
        <Box sx={{ marginBottom: 4, width: "auto", maxWidth: "300px", mr: 4 }}>
          <Typography
            variant="h6"
            sx={{ color: "#f5f5f5", marginBottom: 1, fontFamily: "inherit" }}
          >
            ¡SÍGUENOS!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Link
              href="https://www.facebook.com/MahikyCR?mibextid=ZbWKwL"
              sx={{ color: "#f5f5f5", textDecoration: "none" }}
            >
              <FacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/mahikystore?igsh=MTd1bmt0bWF4YWRhMA=="
              sx={{ color: "#f5f5f5", textDecoration: "none" }}
            >
              <InstagramIcon />
            </Link>
            <Link
              href="https://wa.me/c/50660131713"
              sx={{ color: "#f5f5f5", textDecoration: "none" }}
            >
              <WhatsAppIcon />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
