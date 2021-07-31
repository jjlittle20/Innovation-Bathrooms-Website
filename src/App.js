import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Box, Container, Grid, Link } from "@material-ui/core";
import ImageHero from "./img/hero.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ServiceGuarentee from "./img/checkTwo.svg";
import Install from "./img/install.svg";
import Contact from "./img/Contact.svg";
import Hidden from "@material-ui/core/Hidden";

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
    paddingBottom: theme.spacing(3),
  },
  serviceContainerTitle: {
    fontWeight: 600,
    paddingBottom: theme.spacing(3),
    textAlign: "center",
  },
  Card: {
    height: "100%",
  },
  media: {
    height: 200,
    width: 200,
  },
  cardCenter: {
    display: "flex",
    justifyContent: "center",
  },
  cardButtonArea: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 28,
  },
  cardButtonAreaOne: {
    justifyContent: "center",
    alignItems: "center",
  },
  cardTypography: {
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
            <Hidden mdDown>
              <Button color="inherit">Gallery</Button>
              <Button color="inherit">FAQ</Button>
              <Button color="inherit">Contact Us</Button>
            </Hidden>
          </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
          <Box>Stylish and Bespoke Bathrooms</Box>
        </Box>
        <Container maxWidth="lg" className={classes.serviceContainer}>
          <Typography
            variant="h3"
            className={classes.serviceContainerTitle}
            color="primary"
          >
            Bathroom Installations in Bromley, Orpington, Bexley and Dartford
            areas
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} className={classes.Card}>
                <CardActionArea>
                  <div className={classes.cardCenter}>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      src={ServiceGuarentee}
                      title="Workmanship Guarenteed"
                    />
                  </div>

                  <CardContent className={classes.cardTypography}>
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
                <CardActions className={classes.cardButtonAreaOne}>
                  <Button variant="contained" size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} className={classes.Card}>
                <CardActionArea>
                  <div className={classes.cardCenter}>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      src={Install}
                      title="Profesional installation"
                    />
                  </div>

                  <CardContent className={classes.cardTypography}>
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
                <CardActions className={classes.cardButtonArea}>
                  <Button variant="contained" size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card elevation={0} className={classes.Card}>
                <CardActionArea>
                  <div className={classes.cardCenter}>
                    <CardMedia
                      className={classes.media}
                      component="img"
                      src={Contact}
                      title="Contact Us!"
                    />
                  </div>

                  <CardContent className={classes.cardTypography}>
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
                <CardActions className={classes.cardButtonArea}>
                  <Button variant="contained" size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
        <footer>
          <Box
            px={{ xs: 3, sm: 10 }}
            py={{ xs: 5, sm: 10 }}
            bgcolor="text.secondary"
            color="white"
          >
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Help</Box>
                  <Box>
                    <Link href="/" color="inherit">
                      FAQ
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Testimonials
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Suppliers
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Get A Quote</Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Contact Us
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box borderBottom={1}>Navigation</Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Home
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Gallery
                    </Link>
                  </Box>
                  <Box>
                    <Link href="/" color="inherit">
                      Terms and Conditions
                    </Link>
                  </Box>
                </Grid>
              </Grid>
              <Box
                textAlign="center"
                pt={{ xs: 5, sm: 10 }}
                pb={{ xs: 5, sm: 0 }}
              >
                Innovation Bathrooms&reg; {new Date().getFullYear()}
              </Box>
            </Container>
          </Box>
        </footer>
      </div>
    </body>
  );
}

export default App;
