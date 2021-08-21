import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepButton,
  Card,
  CardMedia,
  CardContent,
  List,
  ListItem,
} from "@material-ui/core";
import PetronasLogo from "../image/Petronas.png";
import SagentiaLogo from "../image/Sagentia.png";
import UniLogo from "../image/unilogo.jpg";
const LazyLoad = React.lazy(() => import("./LazyLoad.js"));

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  rootSmall: {
    width: "100%",
    height: "auto",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    alignItems: "center",
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  button: {
    marginRight: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: "inline-block",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  media: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "50vw",
    height: "20vw",
    margin: "auto",
    padding: theme.spacing(2),
  },
  card: {},
  cardBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: theme.spacing(3),
  },
  cardBoxSmall: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(3),
  },
  title: {
    paddingTop: theme.spacing(10),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  listItem: {},
  stepper: {
    backgroundColor: "#fafafa",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

function getSteps() {
  return [
    {
      label: "University of Cambridge",
      year: "2018",
      logo: UniLogo,
      title: (
        <Typography variant="h6">
          Machine Learning Research Assistant &middot; University of Cambridge
          &middot; UK
        </Typography>
      ),
      subtitle: (
        <Typography variant="subtitle2">2018 &middot; 10 Weeks </Typography>
      ),
      details: (
        <List>
          <ListItem>
            <Typography variant="subtitle2" color="textSecondary" align="left">
              Built a CNN in Python and Tensorflow based on the YOLO algorithm
              to detect the location, size and orientation of 2D vortices in 2D
              velocity vector field. Wrote CV algorithms for data augmentation.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle2" color="textSecondary" align="left">
              Built a CNN to detect corner flow separation in turbine blades.
              Model achieved up to 99% accuracy.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle2" color="textSecondary" align="left">
              Co-Author of the final research paper submitted to the AIAA
              “SciTech” conference (January 2019).
            </Typography>
          </ListItem>
        </List>
      ),
    },
    {
      label: "Sagentia Innovation",
      year: "2019",
      logo: SagentiaLogo,
      title: (
        <Typography variant="h6">
          Software Engineering Intern &middot; Sagentia &middot; UK
        </Typography>
      ),
      subtitle: (
        <Typography variant="subtitle2">2019 &middot; 10 Weeks</Typography>
      ),
      details: (
        <List>
          <ListItem>
            <Typography variant="subtitle2" color="textSecondary" align="left">
              Wrote and ran extensive medical test protocols for a medical
              software with 2000+ software requirements.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle2" color="textSecondary" align="left">
              Generated bug analysis and regular verification progress reports
              to the client and project manager.
            </Typography>
          </ListItem>
        </List>
      ),
    },
    {
      label: "PETRONAS",
      year: "2020",
      logo: PetronasLogo,
      title: (
        <Typography variant="h6">
          Data Analyst &middot; PETRONAS &middot; Malaysia
        </Typography>
      ),
      subtitle: (
        <Typography variant="subtitle2">2020 &middot; Present </Typography>
      ),
      details: (
        <List>
          <ListItem>
            <Typography variant="subtitle2" color="textSecondary" align="left">
              Developed data pipeline with ETL and API developers for PETRONAS
              C-Suite Dashboards, including EVP, VP, and CEO. Dashboard was
              featured during EVP Townhall, attended by 1000+ employees.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle2" color="textSecondary" align="left">
              Built end-to-end data pipeline from various data sources including
              Plant Sensors (PI AF), PostgreSQL, REST API, Sharepoint List and
              Excel to 10+ end user applications and Power BI.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography variant="subtitle2" color="textSecondary" align="left">
              Implemented Data Governance practices for 10 digital applications
              based on international data management standards and practices
              (DAMA-DMBOK), with focus on Data Quality, Master Data and Metadata
              management.
            </Typography>
          </ListItem>
        </List>
      ),
    },
  ];
}

export default function Experience({ sref }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(new Set());
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  function isStepComplete(step) {
    return completed.has(step);
  }

  return (
    <div className={classes.root} ref={sref}>
      <Typography
        variant="h3"
        color="primary"
        className={classes.title}
        paragraph
      >
        Work Experience
      </Typography>
      <Stepper alternativeLabel nonLinear className={classes.stepper}>
        {steps.map(({ label, year, logo, title, subtitle, details }, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={index} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
                disabled
                icon={<Typography>{year}</Typography>}
              >
                <Suspense
                  fallback={
                    <div style={{ backgroundColor: "white" }}>Loading...</div>
                  }
                >
                  <LazyLoad>
                    <img src={logo} width="100vw" height="auto" alt="" />
                  </LazyLoad>
                </Suspense>
                <Box className={classes.cardBox}>
                  <Card className={classes.card}>
                    <CardContent>{title}</CardContent>
                    <CardContent>{subtitle}</CardContent>
                    {details}
                  </Card>
                </Box>
              </StepButton>
            </Step>
          );
        })}
      </Stepper>
      <Box className={classes.rootSmall}>
        {steps.map(({ label, year, logo, title, subtitle, details }, index) => {
          return (
            <Box key={index} className={classes.cardBoxSmall}>
              <Card className={classes.card}>
                <Suspense
                  fallback={
                    <div style={{ backgroundColor: "white" }}>Loading...</div>
                  }
                >
                  <LazyLoad paddingTop="0">
                    <CardMedia className={classes.media} image={logo} />
                  </LazyLoad>
                </Suspense>
                <CardContent>{title}</CardContent>
                <CardContent>{subtitle}</CardContent>
                {details}
              </Card>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}
