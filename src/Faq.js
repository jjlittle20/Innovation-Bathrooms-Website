import react from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  faqPageTitle: {
    fontWeight: 600,
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    textAlign: "center",
  },
  accordionContainer: {
    paddingBottom: theme.spacing(21),
  },
}));

function Faq() {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h3" className={classes.faqPageTitle} color="primary">
        How can we help you?
      </Typography>
      <Container className={classes.accordionContainer}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" className={classes.heading}>
              I am unsure exactly what I want, can you help me decide?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When we have arranged a convenient time for your free quotation we
              will bring a portfolio of our past work and many ideas that you
              can choose from, and of course, you will not need to decide
              immediately. We will give you as much time as you need to make you
              final decisions.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" className={classes.heading}>
              When can you start installing our new Bathroom/Wetroom?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              This is depending on how busy we are at the time you request your
              quotation. We are normally able to commence work within 4-6 weeks.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" className={classes.heading}>
              Do you supply bathroom suites and all other materials?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, we supply and fit all materials, please click here to view
              our regular Suppliers. If you require installation only then we
              will be happy to do this for you.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography color="primary" className={classes.heading}>
              What locations do we cover?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We install bathrooms and wetrooms in South East England including:
              Ashford, Barking & Dagenham, Basildon, Bexley, Bexleyheath,
              Bickley, Braintree, Brentwood, Bromley, Dartford, Chelmsford,
              Canterbury, Colchester, Croydon, Enfield, Epping, Essex,
              Folkestone, Grays, Gravesend, Greenwich, Harlow, Havering, Kent,
              Orpington, Maidstone, Merton, Purfleet, Rayleigh, Redbridge,
              Rochester, Romford, Sevenoaks, Sidcup, Sittingbourne, Tonbridge,
              Tunbridge Wells, London & surrounding areas.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </div>
  );
}

export default Faq;
