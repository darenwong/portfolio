import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper, List, ListItem } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import StorageIcon from "@material-ui/icons/Storage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fafafa",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonGroup: {
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  title: {
    paddingTop: theme.spacing(10),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: theme.spacing(3),
  },
  mainBox: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    justifyContent: "space-around",
  },
  subBox: {
    display: "flex",
    flex: "1",
    margin: theme.spacing(3),
    justifyContent: "center",
  },
  icon: {
    padding: theme.spacing(1),
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "Center",
  },
  listItem: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
}));

const frontend = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "React JS" },
  { name: "Bootstrap" },
  { name: "Material UI" },
];
const backend = [
  { name: "Python" },
  { name: "Javascript" },
  { name: "Node JS" },
  { name: "SQL/NoSQL" },
  { name: "PostgreSQL" },
  { name: "Firebase" },
  { name: "WebSockets" },
];
const datascience = [
  { name: "Tensorflow" },
  { name: "Pandas" },
  { name: "OpenCV" },
  { name: "C++" },
  { name: "Arduino" },
  { name: "MATLAB" },
  { name: "Power BI" },
];

export default function Skills({ sref }) {
  const classes = useStyles();

  return (
    <div className={classes.root} ref={sref}>
      <Box className={classes.container}>
        <Typography variant="h3" color="primary" className={classes.title}>
          Skills
        </Typography>
        <Box className={classes.container}>
          <Box className={classes.mainBox}>
            <Paper className={classes.subBox}>
              <List>
                <Typography
                  variant="h6"
                  className={classes.iconContainer}
                  paragraph
                >
                  <DeveloperModeIcon className={classes.icon} />
                  Front End
                </Typography>
                {frontend.map(({ name }, index) => (
                  <ListItem className={classes.listItem} key={index}>
                    <Typography variant="subtitle2">{name}</Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Paper className={classes.subBox}>
              <List>
                <Typography
                  variant="h6"
                  className={classes.iconContainer}
                  paragraph
                >
                  <StorageIcon className={classes.icon} />
                  Back End
                </Typography>
                {backend.map(({ name }, index) => (
                  <ListItem className={classes.listItem} key={index}>
                    <Typography variant="subtitle2">{name}</Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Paper className={classes.subBox}>
              <List>
                <Typography
                  variant="h6"
                  className={classes.iconContainer}
                  paragraph
                >
                  <CodeIcon className={classes.icon} />
                  Others
                </Typography>

                {datascience.map(({ name }, index) => (
                  <ListItem className={classes.listItem} key={index}>
                    <Typography variant="subtitle2">{name}</Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
