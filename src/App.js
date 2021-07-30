import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Container, Grid } from "@material-ui/core";
import ImageHero from "./img/hero.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ServiceGuarentee from "./img/checkmark.svg";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${ImageHero})`,
    height: "850px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    posistion: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    textAlign: "center",
  },
  serviceContainer: {
    paddingTop: theme.spacing(3),
  },
  serviceContainerTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <body>
      <div className="App">
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
            <Button color="inherit">Gallery</Button>
            <Button color="inherit">FAQ</Button>
            <Button color="inherit">Contact Us</Button>
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box>Stylish and Bespoke Bathrooms</Box>
        </Box>
        <Container maxWidth="lg" className={classes.serviceContainer}>
          <Typography variant="h3" className={classes.serviceContainerTitle}>
            Bathroom Installations in Bromley, Orpington, Bexley and Dartford
            areas
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    src={ServiceGuarentee}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      We pride ourselves with a high class quality finish that’s
                      why a huge amount of work comes from customers
                      recommendations. At Innovation Bathrooms our installation
                      service insures you will have a bathroom that you will be
                      proud of.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    src={ServiceGuarentee}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      We install all leading makes of bathroom suites, shower
                      room furniture and specialise in wetrooms. Using high
                      quality and trusted brands to give you a bathroom you will
                      be proud of.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    src={ServiceGuarentee}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Should you have any questions or queries or would like
                      some further information then please use the "Contact Us"
                      button below and one of our dedicated team will get back
                      in contact with you ASAP.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </div>
    </body>
  );
}

export default App;
