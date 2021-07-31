import react from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
  },
}));

function Faq() {
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
          <Typography variant="h6" className={classes.title} color="primary">
            Innovation Bathrooms
          </Typography>
          <Hidden mdDown>
            <Button color="inherit">Gallery</Button>
            <Button color="inherit">FAQ</Button>
            <Button color="inherit">Contact Us</Button>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Faq;
