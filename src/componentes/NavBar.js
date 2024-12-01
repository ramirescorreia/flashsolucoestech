import React, { useState } from "react";
import Logo from "../imagens/Logo.svg";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { HiOutlineBars3 } from "react-icons/hi2";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "Sobre Nós",
      icon: <InfoIcon />,
    },
    {
      text: "Nosso Trabalho",
      icon: <HomeWorkIcon />,
    },
    {
      text: "Avaliação",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contato",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo flash" />
      </div>

      <div className="navbar-links-container">
        
          <a href="#home">Home</a>
          <a href="#sobre">Sobre Nós</a>
          <a href="#work">Nosso Trabalho</a>
          <a href="#avaliacao">Avaliação</a>
          <a href="#contato">Contato</a>
          <button className="primary-button">Orçamento</button>
        
      </div>

      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>

      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <list>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </list>
        </box>
      </Drawer>
    </nav>
  );
};

export default NavBar;
