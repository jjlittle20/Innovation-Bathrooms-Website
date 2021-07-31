import react from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

function Footer() {
  const classes = useStyles();
  return (
    <div>
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
  );
}

export default Footer;
