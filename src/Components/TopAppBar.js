import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "./img/header.png";
import Hidden from "@material-ui/core/Hidden";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black",
  },
  AppBar: {
    backgroundColor: "white",
  },
  logo: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  logoImg: {
    height: 69,

    bottom: 0,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="black"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.logo}>
            <img className={classes.logoImg} src={logo} alt="Logo" />
          </div>
          <Hidden mdDown>
            <Button color="black">Gallery</Button>
            <Button color="black">FAQ</Button>
            <Button color="black">Contact Us</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}
