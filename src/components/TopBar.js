import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, ButtonGroup } from "@material-ui/core";
import TemporaryDrawer from "./TemporaryDrawer.js";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    backgroundColor: "#fafafa",
  },
  buttonGroup: {
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopBar({ scrollToSection }) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [section, setSection] = React.useState(null);

  React.useEffect(() => {
    if (drawerOpen === false) {
      if (section !== null) {
        scrollToSection(section);
        setSection(null);
      }
    }
  }, [drawerOpen, scrollToSection, section]);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolBar}>
          <Typography style={{ fontWeight: 600 }} color="primary" gutterBottom>
            D
          </Typography>
          <Typography style={{ fontWeight: 600 }} color="primary">
            W
          </Typography>
          <TemporaryDrawer
            scrollToSection={scrollToSection}
            drawerOpen={drawerOpen}
            setDrawerOpen={setDrawerOpen}
            setSection={setSection}
          />
          <ButtonGroup
            variant="text"
            color="primary"
            aria-label="text primary button group"
            className={classes.buttonGroup}
          >
            <Button onClick={() => scrollToSection("hello")}>Home</Button>
            <Button onClick={() => scrollToSection("about")}>About</Button>
            <Button onClick={() => scrollToSection("skills")}>Skills</Button>
            <Button onClick={() => scrollToSection("experience")}>
              Experience
            </Button>
            <Button onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button onClick={() => scrollToSection("contact")}>Contact</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}
