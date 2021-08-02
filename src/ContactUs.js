import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "400px",
    paddingBottom: theme.spacing(10),
  },
  contactUsTitle: {
    textAlign: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(0),
  },
  openingHours: {
    textAlign: "center",
    paddingBottom: theme.spacing(5),
  },
  addressTelephone: {
    textAlign: "center",
    paddingBottom: theme.spacing(5),
  },
  orTitle: {
    textAlign: "center",
    paddingBottom: theme.spacing(5),
  },
  formContainer: {
    textAlign: "center",
    paddingBottom: theme.spacing(5),
  },
  formTextField: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const Map = () => {
  return (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: 51.4413, lng: 0.2308 }}>
      <Marker position={{ lat: 51.4413, lng: 0.2308 }} />
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const ContactUs = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box>
        <Typography
          className={classes.contactUsTitle}
          color="primary"
          variant="h2"
        >
          Contact Us
        </Typography>
        <Typography
          className={classes.contactUsTitle}
          color="black"
          variant="h5"
        >
          Opening Hours
        </Typography>
        <Typography className={classes.openingHours}>
          Monday – Friday 8.30am – 5.30pm <br /> Saturday 9.00am – 2.30pm <br />
          Sunday CLOSED
        </Typography>
        <Typography className={classes.addressTelephone}>
          T: 0800 433 4802 <br /> <br /> <br />
          Innovation Bathrooms,
          <br /> 2 Rochester Road,
          <br />
          Dartford,
          <br /> DA1 1SP
        </Typography>
        <Typography className={classes.orTitle} color="primary" variant="h2">
          Or Let Us Contact You!
        </Typography>
        <Typography className={classes.orTitle} color="primary" variant="h5">
          Use the form below and one of our dedicated team will contact you.
        </Typography>
      </Box>
      <Box className={classes.formContainer}>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.formTextField}
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            fullWidth
          />
          <br />
          <TextField
            className={classes.formTextField}
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            fullWidth
          />
          <br />
          <TextField
            className={classes.formTextField}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
          <br />
          <TextField
            className={classes.formTextField}
            id="outlined-basic"
            label="Description of Work Needed"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
      </Box>
      <Box className={classes.mapContainer}>
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Box>
    </Container>
  );
};

export default ContactUs;
