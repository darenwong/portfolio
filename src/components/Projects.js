import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Box,
  Typography,
  IconButton,
  Badge,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Collapse,
} from "@material-ui/core";
import BridgeImage from "../image/bridge.JPG";
import myRewardImage from "../image/myReward2.JPG";
import myPortfolioImage from "../image/portfolio.JPG";
import gifvoteImage from "../image/gifvote.JPG";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import YouTubeIcon from "@material-ui/icons/YouTube";
const LazyLoad = React.lazy(() => import("./LazyLoad.js"));
const Youtube = React.lazy(() => import("./Youtube.js"));

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fafafa",
    heigh: "auto",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  buttonGroup: {
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  title: {
    paddingTop: theme.spacing(10),
  },
  container: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
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
    flexDirection: "column",
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
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  cardButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignContent: "flex-end",
  },
  projectCard: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  CardActionArea: {
    height: "100%",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    marginRight: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

function ProjectCard({ data }) {
  let { image, title, subtitle, technology, url, github, live } = data;
  const classes = useStyles();
  return (
    <Card className={classes.projectCard}>
      <CardActionArea
        className={classes.CardActionArea}
        href={url}
        target="_blank"
      >
        <Suspense
          fallback={<div style={{ backgroundColor: "white" }}>Loading...</div>}
        >
          <LazyLoad paddingTop="56.25%">
            <CardMedia
              image={image}
              style={{
                bottom: 0,
                height: "100%",
                left: 0,
                position: "absolute",
                right: 0,
                top: 0,
                width: "100%",
              }}
            />
          </LazyLoad>
        </Suspense>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            paragraph
          >
            {subtitle}
          </Typography>
          <Typography variant="subtitle2" color="primary" component="p">
            {technology}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardButton}>
        <IconButton href={url} target="_blank">
          {live && (
            <Badge badgeContent={"LIVE"} color="secondary">
              <LinkIcon />
            </Badge>
          )}
          {!live && <LinkIcon />}
        </IconButton>
        <IconButton href={github} target="_blank">
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
function ProjectCardVideo({ data }) {
  let { title, subtitle, technology, url, github, live, youtube } = data;
  const classes = useStyles();
  return (
    <Card className={classes.projectCard}>
      <CardActionArea
        className={classes.CardActionArea}
        href={url || youtube}
        target="_blank"
      >
        <Suspense
          fallback={<div style={{ backgroundColor: "white" }}>Loading...</div>}
        >
          <Youtube url={youtube} />
        </Suspense>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
            paragraph
          >
            {subtitle}
          </Typography>
          <Typography variant="subtitle2" color="primary" component="p">
            {technology}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardButton}>
        {url && (
          <IconButton href={url} target="_blank">
            {live && (
              <Badge badgeContent={"LIVE"} color="secondary">
                <LinkIcon />
              </Badge>
            )}
            {!live && <LinkIcon />}
          </IconButton>
        )}
        {github && (
          <IconButton href={github} target="_blank">
            <GitHubIcon />
          </IconButton>
        )}
        {youtube && (
          <IconButton href={youtube} target="_blank">
            <YouTubeIcon />
          </IconButton>
        )}
      </CardActions>
    </Card>
  );
}

let cardData = {
  gifvote: {
    title: "GIF Vote",
    image: gifvoteImage,
    subtitle:
      "A social media app where users can post GIF based poll for others to vote, like and comment. A library of more than 1000 GIFs, polls, likes, and comments.",
    url: "https://gif-vote.netlify.app/",
    github: "https://github.com/darenwong/GIFVote-web/tree/master",
    technology: (
      <>ReactJS &middot; NodeJS &middot; PostgreSQL &middot; REST API</>
    ),
    live: true,
  },
  bridge: {
    title: "Floating Bridge",
    image: BridgeImage,
    subtitle:
      "An online platform for users to connect and play Bridge together. Supports multiplayer game with online chat features.",
    url: "https://floating-bridge-app.netlify.app/",
    github: "https://github.com/darenwong/React-online-bridge-app",
    technology: <>ReactJS &middot; NodeJS &middot; WebSocket</>,
    live: true,
  },
  myReward: {
    title: "MyReward",
    image: myRewardImage,
    subtitle:
      "A loyalty webapp and digital rewards platform. It allows merchants to set up and manage a digital loyalty program by giving customers redeemable stamps digitally via QR code scan. App is a PWA that is installable and works offline.",
    url: "https://myreward.web.app",
    github: "https://github.com/darenwong/myReward",
    technology: (
      <>ReactJS &middot; Firebase &middot; Material UI &middot; PWA</>
    ),
    live: true,
  },
  myPortfolio: {
    title: "My Portfolio",
    image: myPortfolioImage,
    subtitle:
      "My personal portfolio website built using React JS and Material UI library. Mobile friendly and fully responsive design.",
    url: "https://darenwong.github.io/portfolio/",
    github: "https://github.com/darenwong/portfolio",
    technology: <>ReactJS &middot; Material UI</>,
    live: true,
  },
  vrdisplay: {
    title: "VR Display",
    image: myPortfolioImage,
    subtitle:
      "This project turns your laptop screen into a VR display via head tracking using your webcam. Head tracking is achieved using Dlib's face detector and 3D image is rendered using OpenGL.",
    url: null,
    youtube:
      "https://www.youtube.com/embed/wFUVqaULVcY?controls=1&amp;start=15&mute=1",
    github: "https://github.com/darenwong/VR-Display",
    technology: <>Python &middot; OpenCV &middot; OpenGL</>,
    live: false,
  },
  objectTracking: {
    title: "Object Tracking Robot",
    image: myPortfolioImage,
    subtitle:
      "A robotic arm attached with a webcam that can track and follow a ball's position. Ball tracking is achieved using 2 PID controllers and ball detection is done using color detection algorithm in Python (OpenCV).",
    url: null,
    youtube:
      "https://www.youtube.com/embed/O1YXzyCnVc4?controls=1&amp;start=3&mute=1",
    github: null,
    technology: <>Python &middot; OpenCV &middot; Arduino &middot; C++</>,
    live: false,
  },
  headTracking: {
    title: "Robotic Elephant Trunk",
    image: myPortfolioImage,
    subtitle:
      "This was my MEng Final Year Project at University of Cambridge. The 2 DOF robot is driven by 4 flexible tendons controlled via PID controller, which allows it to traverse around foreign objects to reach the desired set point",
    url: "https://sites.google.com/site/fulvioforni/lab/tendon-driven-robotic-elephant-trunk?authuser=0",
    youtube: "https://www.youtube.com/embed/XxgpBG1PMLY?&mute=1",
    github: null,
    technology: <>C++ &middot; VEX Robotics</>,
    live: false,
  },
};

export default function Projects({ sref }) {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.root} ref={sref}>
      <Typography variant="h3" color="primary" className={classes.title}>
        Projects
      </Typography>
      <Box className={classes.container}>
        <Box className={classes.mainBox}>
          <Box className={classes.subBox}>
            <ProjectCard data={cardData.gifvote} />
          </Box>
          <Box className={classes.subBox}>
            <ProjectCard data={cardData.bridge} />
          </Box>
          <Box className={classes.subBox}>
            <ProjectCard data={cardData.myReward} />
          </Box>
        </Box>{" "}
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box className={classes.mainBox}>
            <Box className={classes.subBox}>
              <ProjectCardVideo data={cardData.vrdisplay} />
            </Box>
            <Box className={classes.subBox}>
              <ProjectCard data={cardData.myPortfolio} />
            </Box>
            <Box className={classes.subBox}>
              <ProjectCardVideo data={cardData.objectTracking} />
            </Box>
            <Box className={classes.subBox}>
              <ProjectCardVideo data={cardData.headTracking} />
            </Box>
          </Box>
        </Collapse>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        {!expanded && (
          <Typography variant="subtitle2" color="textSecondary">
            Show More
          </Typography>
        )}
        {expanded && (
          <Typography variant="subtitle2" color="textSecondary">
            Show Less
          </Typography>
        )}
      </Box>
    </div>
  );
}
