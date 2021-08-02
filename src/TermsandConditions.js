import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  termsTitle: {
    textAlign: "center",
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  termsContainer: {
    textAlign: "center",
    paddingBottom: theme.spacing(5),
  },
  termsText: {
    paddingBottom: theme.spacing(5),
    color: "grey",
  },
}));

const TermsandConditions = () => {
  const classes = useStyles();
  return (
    <Container className={classes.termsContainer}>
      <Typography className={classes.termsTitle} color="primary" variant="h2">
        Term and Conditions
      </Typography>
      <Typography className={classes.termsText}>
        Our fixed price quotation is valid for three months from the date shown
        subject to material price increases and will be confirmed at time of
        placing order.
      </Typography>
      <Typography className={classes.termsText}>
        A deposit of 25% of the total price is payable at the time of placing
        the order to confirm the start date of works
      </Typography>
      <Typography className={classes.termsText}>
        On commencement of works and delivery of materials, a further 25% of the
        total price is payable to cover the cost of materials.
      </Typography>
      <Typography className={classes.termsText}>
        On completion of works the final 50% of the total price becomes payable.
        Late payments after 7 days from completion date will accumulate interest
        at 27.9% APR..
      </Typography>
      <Typography className={classes.termsText}>
        While we take extreme care to avoid any damage to your property and are
        fully insured, we can not be held responsible for damage caused to
        pictures/furnishings that can be moved whilst transporting tools and
        materials through your property and it is your responsibility to move
        any such items
      </Typography>
      <Typography className={classes.termsText}>
        If after placing your order you wish to cancel, any special order
        materials will need to be paid for in full and if within 7 days of start
        date a restocking charge will be deducted from your deposit before any
        refund.
      </Typography>
      <Typography className={classes.termsText}>
        Please make sure all the work you require completed is included in your
        quotation as only the work listed will be carried out within the price
        quoted. We can adjust or re-quote to meet your exact requirements.
      </Typography>
      <Typography className={classes.termsText}>
        Any additional small works required after commencement of initial
        contract will be quoted for and will then be added to the final invoice.
        Large jobs will be quoted for and treated as a new contract.
      </Typography>
      <Typography className={classes.termsText}>
        Payment of the initial deposit is taken as acceptance of our terms and
        conditions.
      </Typography>
    </Container>
  );
};
export default TermsandConditions;
