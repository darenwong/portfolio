import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100.1vh",
    backgroundColor: "#fafafa",
  },
  helloContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },
  learnMoreButton: {
    marginTop: theme.spacing(3),
    margin: "auto",
  },
  normalText: {
    color: "black",
    fontWeight: 500,
  },
}));

export default function Hello({ sref, scrollToSection }) {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={sref}>
      <Box className={classes.helloContainer}>
        <Typography variant="h3">Hi, I'm Daren Wong,</Typography>
        <Typography
          style={{ fontWeight: 600 }}
          variant="h3"
          color="primary"
          display="inline"
          paragraph
        >
          <Box className={classes.normalText} component="span">
            {"a "}
          </Box>{" "}
          full stack developer.
        </Typography>
        <Button
          className={classes.learnMoreButton}
          variant="outlined"
          color="primary"
          endIcon={<ExpandMoreIcon />}
          onClick={() => scrollToSection("about")}
        >
          Learn more
        </Button>
      </Box>
    </div>
  );
}
