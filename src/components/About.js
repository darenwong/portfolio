import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Typography } from "@material-ui/core";
import ProfilePic from "../image/profile_pic.jpg";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@material-ui/core/styles";
const LazyLoad = React.lazy(() => import("./LazyLoad.js"));

let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#fafafa",
    minHeight: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  profilePic: {
    width: "25vw",
    height: "25vw",
  },
  profContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
  profTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  normalText: {
    color: "black",
    fontWeight: 500,
    fontSize: "inherit",
  },
  title: {
    paddingTop: theme.spacing(10),
  },
}));

export default function About({ sref }) {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={sref}>
      <Box className={classes.container}>
        <Typography variant="h3" color="primary" className={classes.title}>
          About Me
        </Typography>
        <Box className={classes.subContainer}>
          <Suspense
            fallback={
              <div style={{ backgroundColor: "white" }}>Loading...</div>
            }
          >
            <Box padding="5vw" className={classes.profContainer}>
              <LazyLoad paddingTop="0">
                <Avatar src={ProfilePic} className={classes.profilePic} />
              </LazyLoad>
            </Box>
          </Suspense>
          <Box padding="5vw" className={classes.profTextContainer}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="subtitle2"
                color="primary"
                align="left"
                style={{ fontWeight: 600 }}
                paragraph
              >
                <Box component="span" className={classes.normalText}>
                  Hi, I'm Daren, a recent{" "}
                </Box>
                Information Engineering Graduate from University of Cambridge{" "}
                <Box component="span" className={classes.normalText}>
                  with First Class Honours.
                </Box>
              </Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                style={{ fontWeight: 600 }}
                align="left"
                paragraph
              >
                <Box component="span" className={classes.normalText}>
                  I'm a self-taught full stack developer and I build{" "}
                </Box>
                Web and Mobile based Applications
                <Box component="span" className={classes.normalText}>
                  . I'm currently seeking career opportunities to be a
                </Box>{" "}
                Full Stack Developer.
              </Typography>
              <Typography
                variant="subtitle2"
                color="primary"
                style={{ fontWeight: 600 }}
                align="left"
                paragraph
              >
                <Box component="span" className={classes.normalText}>
                  I currently work as a{" "}
                </Box>
                Data Analyst at PETRONAS
                <Box component="span" className={classes.normalText}>
                  , and was previously a{" "}
                </Box>
                Software Engineering Intern at Sagentia Innovation{" "}
                <Box component="span" className={classes.normalText}>
                  for 2.5 months. Some of my professional achievements include
                  data engineering for{" "}
                </Box>
                PETRONAS C-Suite Dashboards{" "}
                <Box component="span" className={classes.normalText}>
                  and{" "}
                </Box>
                Enterprise Data Hub.
              </Typography>
            </ThemeProvider>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
