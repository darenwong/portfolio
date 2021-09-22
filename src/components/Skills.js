import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Paper, List, ListItem } from "@material-ui/core";
import { FaBootstrap, FaCode } from "react-icons/fa";
import {
  IoLogoJavascript,
  IoLogoPython,
  IoLogoPwa,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoFirebase,
} from "react-icons/io5";
import {
  SiMaterialUi,
  SiPostgresql,
  SiSocketDotIo,
  SiTensorflow,
  SiCplusplus,
  SiArduino,
  SiPowerbi,
  SiHeroku,
  SiAuth0,
  SiMysql,
  SiCsharp,
  SiGithub,
  SiNetlify,
} from "react-icons/si";
import { AiFillApi } from "react-icons/ai";
import { AiFillCode, AiFillDatabase } from "react-icons/ai";

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
  { name: "HTML", logo: <IoLogoHtml5 /> },
  { name: "CSS", logo: <IoLogoCss3 /> },
  { name: "React JS", logo: <IoLogoReact /> },
  { name: "Bootstrap", logo: <FaBootstrap /> },
  { name: "Material UI", logo: <SiMaterialUi /> },
];
const backend = [
  { name: "Python", logo: <IoLogoPython /> },
  { name: "Javascript", logo: <IoLogoJavascript /> },
  { name: "Node JS", logo: <IoLogoNodejs /> },
  { name: "REST API", logo: <AiFillApi /> },
  { name: "PostgreSQL", logo: <SiPostgresql /> },
  { name: "MySQL", logo: <SiMysql /> },
  { name: "Firebase", logo: <IoLogoFirebase /> },
  { name: "WebSockets", logo: <SiSocketDotIo /> },
  { name: "Heroku", logo: <SiHeroku /> },
  { name: "Netlify", logo: <SiNetlify /> },
  { name: "Auth0", logo: <SiAuth0 /> },
];
const datascience = [
  { name: "PWA", logo: <IoLogoPwa /> },
  { name: "Tensorflow", logo: <SiTensorflow /> },
  { name: "Pandas", logo: null },
  { name: "OpenCV", logo: null },
  { name: "C++", logo: <SiCplusplus /> },
  { name: "C#", logo: <SiCsharp /> },
  { name: "Arduino", logo: <SiArduino /> },
  { name: "MATLAB", logo: null },
  { name: "Power BI", logo: <SiPowerbi /> },
  { name: "Github", logo: <SiGithub /> },
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
                  color="primary"
                  paragraph
                >
                  <FaCode className={classes.icon} />
                  Front End
                </Typography>
                {frontend.map(({ name, logo }, index) => (
                  <ListItem className={classes.listItem} key={index}>
                    {logo}
                    <Typography
                      variant="subtitle2"
                      style={{ marginLeft: "10px" }}
                    >
                      {name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Paper className={classes.subBox}>
              <List>
                <Typography
                  variant="h6"
                  className={classes.iconContainer}
                  color="primary"
                  paragraph
                >
                  <AiFillDatabase className={classes.icon} />
                  Back End
                </Typography>
                {backend.map(({ name, logo }, index) => (
                  <ListItem className={classes.listItem} key={index}>
                    {logo}
                    <Typography
                      variant="subtitle2"
                      style={{ marginLeft: "10px" }}
                    >
                      {name}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </Paper>
            <Paper className={classes.subBox}>
              <List>
                <Typography
                  variant="h6"
                  className={classes.iconContainer}
                  color="primary"
                  paragraph
                >
                  <AiFillCode className={classes.icon} />
                  Others
                </Typography>

                {datascience.map(({ name, logo }, index) => (
                  <ListItem className={classes.listItem} key={index}>
                    {logo}
                    <Typography
                      variant="subtitle2"
                      style={{ marginLeft: "10px" }}
                    >
                      {name}
                    </Typography>
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
