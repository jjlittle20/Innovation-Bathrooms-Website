import react from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  titleLink: {
    flexGrow: 1,

    textDecoration: "none",
  },
  appBar: {
    backgroundColor: "#fff",
  },
}));

function Nav() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appBar} color="background">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" color="inherit" className={classes.titleLink}>
            <Typography variant="h6" className={classes.title} color="primary">
              Innovation Bathrooms
            </Typography>
          </Link>
          <Typography>
            <Hidden mdDown>
              <Button color="inherit">Gallery</Button>
              <Link to="/Faq" color="inherit" className="links">
                <Button color="#fff">FAQ</Button>
              </Link>

              <Button color="inherit">Contact Us</Button>
            </Hidden>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
