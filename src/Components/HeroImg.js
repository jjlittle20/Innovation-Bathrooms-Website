import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import hero from "./img/hero.jpg";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "80vh",
    width: "100vw",
    backgroundImage: `url(${hero})`,
    backgroundSize: "cover",
    display: "block",
  },
  imgText: {
    color: "white",
    paddingTop: 150,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} justify="center">
        <Grid align="center" item xs={12}>
          <Typography className={classes.imgText} variant="h1">
            Stylish and Bespoke Bathrooms
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
