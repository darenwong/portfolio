import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button, IconButton } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  learnMoreButton: {
    marginTop: theme.spacing(3),
  },
  normalText: {
    fontWeight: 500,
  },
  title: {
    marginBottom: theme.spacing(3),
  },
  subtitle: {
    textAlign: "center",
    margin: theme.spacing(3),
  },
}));

export default function Contact({ sref }) {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={sref}>
      <Typography variant="h3" color="primary" className={classes.title}>
        Contact Me
      </Typography>
      <Box className={classes.subtitle}>
        <Typography variant="h6">
          Whether it's a job opportunity, business idea,
        </Typography>
        <Typography variant="h6">
          or feedback on my portfolio, my inbox is open!
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<EmailIcon />}
          href="mailto:daren96123@gmail.com"
        >
          Send Email
        </Button>
        <IconButton
          edge="end"
          className={classes.menuButton}
          aria-label="menu"
          href="https://www.linkedin.com/in/daren-wong-06aa2a121/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          edge="end"
          className={classes.menuButton}
          aria-label="menu"
          href="https://github.com/darenwong"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Box>
    </div>
  );
}
