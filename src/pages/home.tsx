import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import UsersList from "components/home/UsersList";
import UserProfile from "components/home/UserProfile";
import { AppBar, ListItemIcon, Toolbar } from "@mui/material";
import { netoLogo } from "assets";
import PeopleIcon from "@mui/icons-material/People";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Ejemplo de ícono
import CheckIcon from "@mui/icons-material/Check";
import ValidateMember from "components/home/ValidateMember";

const drawerWidth = 240;

export default function Home() {
  const [selectedItem, setSelectedItem] = useState("");

  const handleListItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };
  return (
    <>
      <AppBar>
        <Toolbar style={{ background: "rgba(24, 20, 20, 0.987)" }}>
          <img src={netoLogo} alt="Logo" style={{ height: "40px" }} />
          <Typography
            variant="h6"
            style={{ flexGrow: 1, marginLeft: "20px", fontSize: "20px" }}
          >
            Neto Boxing Center
          </Typography>
          <AccountCircleIcon
            component={Link}
            to="mi-perfil"
            style={{ backgroundColor: "white", color: "black" }}
          />
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", marginTop: "64px" }}>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              marginTop: "64px",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <List>
            <ListItem
              button
              component={Link}
              to="usuarios"
              selected={selectedItem === "usuarios"}
              onClick={() => handleListItemClick("usuarios")}
              style={{
                backgroundColor:
                  selectedItem === "usuarios" ? "#1d97dd" : "transparent",
              }}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <Typography variant="h6">Listado Socios</Typography>
            </ListItem>

            <ListItem
              button
              component={Link}
              to="validar-socio"
              selected={selectedItem === "validar-socio"}
              onClick={() => handleListItemClick("validar-socio")}
              style={{
                backgroundColor:
                  selectedItem === "validar-socio" ? "#1d97dd" : "transparent",
              }}
            >
              <ListItemIcon>
                <CheckIcon />
              </ListItemIcon>
              <Typography variant="h6">Validar Socio</Typography>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
              <Typography variant="h6">WhatsApp</Typography>
            </ListItem>
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Routes>
            <Route path="usuarios" element={<UsersList />} />
            <Route path="mi-perfil" element={<UserProfile />} />
            <Route path="validar-socio" element={<ValidateMember />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}
