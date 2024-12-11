import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'; 

function LoginButton() {
  const navigate = useNavigate(); 

  const handleLoginClick = () => {
    navigate('/login');  
  };

  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        backgroundColor: '#000',
        fontFamily: "inherit",
        color: '#fff',
        padding: '20px',
        marginBottom: '16px',
        borderRadius: '50px',
        maxWidth: '900px',
        '&:hover': {
          backgroundColor: '#333',
        },
      }}
      onClick={handleLoginClick} 
    >
      INICIAR SESIÓN
    </Button>
  );
}

export default LoginButton;
