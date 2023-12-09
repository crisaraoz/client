import React, { useState, ChangeEvent, FormEvent } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./styles.module.css";
import netoLogo from "assets/netoLogo.svg";
import { useNavigate } from "react-router";
interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [inputUser, setInputUser] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleUserChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputUser(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(e.target.value);
  };
  const handleSubmit = async(e: FormEvent) => {
    try {
      const response = await fetch('http://localhost:8080/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: inputUser, password: inputPassword }),
      });
      if (response.ok) {
        onLoginSuccess();
        navigate("/home");
      } else {
        setErrorMessage("Credenciales incorrectas o error en el servidor.");
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      setErrorMessage("Error al conectarse al servidor.");
    }
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.filter = "drop-shadow(0 0 10px yellow)";
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.filter = "none";
  };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <Box
        display="flex"
        gap="36px"
        justifyContent="center"
        flexDirection={{ xs: "column", sm: "row" }}
        alignItems="center"
      >
        <img
          className={styles.logo}
          style={{ padding: "0 5px", height: "280px", width: "280px" }}
          alt="Neto"
          src={netoLogo}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        />

        <div className={styles.loginBox}>
          <form onSubmit={handleSubmit}>
            <div className={styles.userBox}>
              <input type="text" onChange={handleUserChange} />
              <label>Usuario</label>
            </div>
            <div className={styles.userBox}>
              <input type="password" onChange={handlePasswordChange} />
              <label>Contraseña</label>
            </div>
            <center>
              <button style={{ backgroundColor: "transparent" }} type="submit">
                ENTRAR
                <span></span>
              </button>
            </center>
          </form>
          {errorMessage && (
            <div className={styles.errorMessage}>{errorMessage}</div>
          )}
        </div>
      </Box>
    </Container>
  );
};
