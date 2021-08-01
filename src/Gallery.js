import * as React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
//tab1
import ImageOne from "./img/tab 1/tab1001.jfif";
import ImageTwo from "./img/tab 1/tab1002.jfif";
import ImageThree from "./img/tab 1/tab1003.jfif";
import ImageFour from "./img/tab 1/tab1004.jfif";
import ImageFive from "./img/tab 1/tab1005.jfif";
import ImageSix from "./img/tab 1/tab1006.jpg";
import ImageSeven from "./img/tab 1/tab1007.jpg";
import ImageEight from "./img/tab 1/tab1008.jfif";
import ImageNine from "./img/tab 1/tab1009.jfif";
import ImageTen from "./img/tab 1/tab1010.jfif";
import ImageEleven from "./img/tab 1/tab1011.jfif";
import ImageTwelve from "./img/tab 1/tab1012.jfif";
//tab2
import ImageThirteen from "./img/tab2/imageOne.jfif";
import ImageFourteen from "./img/tab2/ImageTwo.jfif";
import ImageFifteen from "./img/tab2/imageThree.jfif";
import ImageSixteen from "./img/tab2/imageFour.jfif";
import ImageSeventeen from "./img/tab2/imageFive.jfif";
import ImageEighteen from "./img/tab2/imageSix.jfif";
import ImageNineteen from "./img/tab2/imageSeven.jfif";
import ImageTwenty from "./img/tab2/imageEight.jfif";
import ImageTwentyOne from "./img/tab2/imageNine.jfif";
import ImageTwentyTwo from "./img/tab2/imageTen.jfif";
import ImageTwentyThree from "./img/tab2/imageEleven.jfif";
import ImageTwentyFour from "./img/tab2/imageTwelve.jfif";

//tab3
import ImageTwentyFive from "./img/tab3/imageOne.jfif";
import ImageTwentySix from "./img/tab3/imageTwo.jfif";
import ImageTwentySeven from "./img/tab3/imageThree.jfif";

const useStyles = makeStyles((theme) => ({
  galleryContainer: {
    paddingBottom: theme.spacing(21),
    paddingTop: theme.spacing(10),
  },
  galleryTitleContainer: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(10),
  },
  galleryTitle: {
    fontWeight: 600,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function StandardImageList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.galleryTitleContainer}>
        <Box>
          <Typography
            className={classes.galleryTitle}
            color="primary"
            variant="h2"
          >
            Your Inspiration
          </Typography>
        </Box>
      </Container>

      <Container className={classes.galleryContainer}>
        <Box sx={{ width: "100%" }} justifyContent="center" alignItems="center">
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              color="primary"
            >
              <Tab label="Bathrooms and En-suites " {...a11yProps(0)} />
              <Tab label="Wetfloors" {...a11yProps(1)} />
              <Tab label="Tiled Flooring " {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={4}
              rowHeight={164}
            >
              {tabOne.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={4}
              rowHeight={164}
            >
              {tabTwo.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={4}
              rowHeight={164}
            >
              {tabThree.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format 1x,
                ${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </TabPanel>
        </Box>
      </Container>
    </div>
  );
}

const tabOne = [
  {
    img: ImageOne,
  },
  {
    img: ImageTwo,
  },
  {
    img: ImageThree,
  },
  {
    img: ImageFour,
  },
  {
    img: ImageFive,
  },
  {
    img: ImageSix,
  },
  {
    img: ImageSeven,
  },
  {
    img: ImageEight,
  },
  {
    img: ImageNine,
  },
  {
    img: ImageTen,
  },
  {
    img: ImageEleven,
  },
  {
    img: ImageTwelve,
  },
];
const tabTwo = [
  {
    img: ImageThirteen,
  },
  {
    img: ImageFourteen,
  },
  {
    img: ImageFifteen,
  },
  {
    img: ImageSixteen,
  },
  {
    img: ImageSeventeen,
  },
  {
    img: ImageEighteen,
  },
  {
    img: ImageNineteen,
  },
  {
    img: ImageTwenty,
  },
  {
    img: ImageTwentyOne,
  },
  {
    img: ImageTwentyTwo,
  },
  {
    img: ImageTwentyThree,
  },
  {
    img: ImageTwentyFour,
  },
];
const tabThree = [
  {
    img: ImageTwentyFive,
  },
  {
    img: ImageTwentySix,
  },
  {
    img: ImageTwentySeven,
  },
];
