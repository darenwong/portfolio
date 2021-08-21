import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginLeft: "auto",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  drawer: {
    display: "unset",
  },
}));

export default function TemporaryDrawer({
  drawerOpen,
  setDrawerOpen,
  setSection,
}) {
  const classes = useStyles();

  const list = () => (
    <List>
      <ListItem
        button
        onClick={() => {
          setSection("hello");
          setDrawerOpen(false);
        }}
      >
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          setSection("about");
          setDrawerOpen(false);
        }}
      >
        <ListItemText primary="About" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          setSection("skills");
          setDrawerOpen(false);
        }}
      >
        <ListItemText primary="Skills" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          setSection("experience");
          setDrawerOpen(false);
        }}
      >
        <ListItemText primary="Experience" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          setSection("projects");
          setDrawerOpen(false);
        }}
      >
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          setSection("contact");
          setDrawerOpen(false);
        }}
      >
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <div className={classes.menuButton}>
      <IconButton
        edge="end"
        color="primary"
        aria-label="menu"
        onClick={() => setDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
        }}
        className={classes.drawer}
        variant="temporary"
      >
        {list()}
      </Drawer>
      ))
    </div>
  );
}
