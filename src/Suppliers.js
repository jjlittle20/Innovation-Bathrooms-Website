import * as React from "react";
import { Container, Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ClayGateLogo from "./img/SupplierLogos/claygate.png";
import Aqualisa from "./img/SupplierLogos/Aqualisa.svg";
import Bristan from "./img/SupplierLogos/bristan-logo.png";
import Lakes from "./img/SupplierLogos/lakes-logo-web.svg";
import Mira from "./img/SupplierLogos/logo-mira.jfif";
import Matki from "./img/SupplierLogos/matki-logo.svg";
import Roca from "./img/SupplierLogos/roca_logo.jfif";
import TileGiant from "./img/SupplierLogos/TileGiant.svg";
import Topps from "./img/SupplierLogos/Topps-Tiles-logo.jpg";

const useStyles = makeStyles((theme) => ({
  Card: {
    height: "100%",
  },
  media: {
    width: 200,
    height: 100,
    objectFit: "contain",
  },
  cardCenter: {
    display: "flex",
    justifyContent: "center",
  },
  cardButtonArea: {
    justifyContent: "center",
    paddingBottom: theme.spacing(4),
  },

  cardTypography: {
    textAlign: "center",
  },
  suppliersPageTitle: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(2),
    textAlign: "center",
  },
  supplierContainer: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  cardButtonGrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    textAlign: "center",
  },
}));

const Suppliers = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box>
        <Typography
          className={classes.suppliersPageTitle}
          color="primary"
          variant="h2"
        >
          Our Suppliers
        </Typography>
      </Box>
      <Box className={classes.supplierContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea
                target="_blank"
                href="https://www.claygate.co.uk/Home"
              >
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={ClayGateLogo}
                    title="Claygate"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    With our in-house designer, Claygate have been able to style
                    and create the company into what it is today. We have also
                    been able to improve and develop the price book more and
                    more as time has gone by, incorporating new products with
                    existing ones. Our designer collaborates with our Marketing
                    Co-ordinator, promoting our products to new and existing
                    customers and advertising Claygate within the bathroom
                    industry.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea
                target="_blank"
                href="https://www.aqualisa.co.uk/"
              >
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={Aqualisa}
                    title="Aqualisa"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Since 1977 Aqualisa has been pioneering the way in which we
                    shower simply because it believes that a great day starts
                    with a great shower.Our journey started with the
                    introduction of the revolutionary bi metallic,
                    thermostatically controlled shower valve, allowing shower
                    temperatures for the first time to be stable and safe.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea
                target="_blank"
                href="hhttps://www.bristan.com/homeowners-home"
              >
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={Bristan}
                    title="Bristan"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    For over 40 years, Bristan has been creating products that
                    help make the everyday brilliantly simple. Whether it’s
                    stylish showers that perform every day, or our new extended
                    10-year guarantee on our taps - you’ll find our products
                    right at home within 1 in 5 British households.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea v>
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={Lakes}
                    title="Lakes"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lakes is an award-winning manufacturer of innovative
                    showering spaces, including walk-ins and bath screens,
                    selling exclusively through builders’ and plumbers’
                    merchants, and retail bathroom stockists. Established in
                    1986, we’re an independent family business with a strong
                    reputation for quality, first-class customer service, speed
                    of delivery and innovative solutions.
                    <br />
                    <br />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea
                target="_blank"
                href="https://www.mirashowers.co.uk/"
              >
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={Mira}
                    title="Mira"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Spending the last 100 years creating the showering
                    technology of tomorrow, Mira is the UK’s leading shower
                    brand for the specification market. In creating these
                    moments of innovation, such as the world’s first
                    thermostatic electric shower - the Mira Advance, we have
                    paved the way for original and groundbreaking design, using
                    our vast experience to create the very best products.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea href="https://www.matki.co.uk/" target="_blank">
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={Matki}
                    title="Matki"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    At Matki we adopt a completely design-lead approach,
                    creating products which are different by design and endure
                    in style and performance. Our in-house design team has a
                    high degree of expertise in designing bathroom products and
                    have experience across the varied UK Design scene. Matki is
                    an innovator in bathroom product design and we are
                    constantly focused on creating products.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea target="_blank" href="https://www.uk.roca.com/">
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={Roca}
                    title="Roca"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Roca continues to be a 100% Spanish company engaged in the
                    creation of bathroom spaces, an activity that has made it a
                    global benchmark. Achieving this dimension is a source of
                    great pride, almost as important as having been one of the
                    best-known, most valued and most integrated brands in the
                    imagination of Spanish society for decades.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea
                target="_blank"
                href="https://www.tilegiant.co.uk/"
              >
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={TileGiant}
                    title="TileGiant"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    From designer curated collections to heritage inspired
                    ranges, Tile Giant have a wealth of household name brands at
                    the cutting edge of tile inspiration.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} className={classes.Card}>
              <CardActionArea
                target="_blank"
                href="https://www.toppstiles.co.uk/"
              >
                <Box className={classes.cardCenter}>
                  <CardMedia
                    className={classes.media}
                    image={Topps}
                    title="Topps"
                    component="img"
                  />
                </Box>

                <CardContent className={classes.cardTypography}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Topps Tiles’ position as the UK’s number one tile retailer
                    is a tribute to the business philosophy and the approach
                    developed by its founders. From the outset the founders
                    recognised that the key to success was an outstanding range
                    of tiles and associated products at prices to suit all
                    pockets coupled with excellent and knowledgeable customer
                    service.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default Suppliers;
