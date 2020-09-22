import React from "react";
import { Typography, Grid, Paper, Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(130),
      height: theme.spacing(125),
    },
  },
  paper: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: 40,
    border: "1px solid #665df5",
    "&:hover": {
      boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
    },
  },
  divider: {
    border: "2px solid #665df5",
    marginTop: 80,
    marginBottom: 30,
  },
  dateStyle: {
    color: "#665df5",
    fontWeight: "bold",
  },
  listItemDiv: {
    textAlign: "left",
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} direction="row" alignItems="center">
      <Grid item xs={12} sm={12}>
        <Grid item>
          <div className={classes.root}>
            <Box>
              <Paper className={classes.paper} elevation={10}>
                <Typography variant="h5">React Developer</Typography>
                <Typography>
                  <span className={classes.dateStyle}>
                    Oct 2019 - Present |{" "}
                  </span>
                  Cybros Developers, Lahore
                </Typography>
                <Typography>
                  <div style={{ textAlign: "left", marginBottom: 30 }}>
                    <ul>
                      <li>
                        Translated UI wireframes and mockups into interactive,
                        dynamic and browser compatible visual elements
                      </li>
                      <li>
                        Implemented flux architecture on individual component
                        level resulted in reducing code complexity and
                        interdependency
                      </li>
                      <li>
                        Integrated with third-party services and APIs as a part
                        of implementation of high profile online service
                        standardizing way of user account management
                      </li>
                      <li>
                        Plan, Design and develop architecture of whole ERP
                        application, services and HOC from scratch.
                      </li>
                      <li>
                        Worked with existing codebase, modifying and bug fixes
                      </li>
                    </ul>
                    <span className={classes.dateStyle}>Tools: </span>
                    HTML, CSS, Material UI, ReactStrap, ReactJS, React-router,
                    Node JS, Redux, Formik, Google APIs, Rest APIs, Mysql, Git,
                    Github, GitLab, Jira
                  </div>
                </Typography>
                <Typography variant="h5">Data Analyst Intern</Typography>
                <Typography>
                  <span className={classes.dateStyle}>
                    Aug 2019 - Oct 2019 |{" "}
                  </span>
                  Cybros Developers, Lahore
                </Typography>
                <Typography>
                  <div className={classes.listItemDiv}>
                    <ul>
                      <li>
                        Implemented Data Exploratory Analysis to find flight
                        trends and customer demand to predict price of flights
                      </li>
                      <li>
                        Performed Data Enrichment jobs to deal missing value, to
                        normalize data, and to select features
                      </li>
                      <li>
                        Write Python scripts to parse large amount of JSON
                        documents to CSV format for data analysis.
                      </li>
                    </ul>
                    <span className={classes.dateStyle}>Tools: </span> Python,
                    Pandas, Numpy, Matplitlib, Seaborn, Google Colaboratory,
                    Scikit-learn, Git, Jira
                  </div>
                  <div className={classes.listItemDiv}>
                    <Divider className={classes.divider} />
                    <Typography variant="h5">
                      React Developer Nano Degree
                    </Typography>
                    <Typography>
                      <span className={classes.dateStyle}>June 2020 | </span>
                      Udacity
                      <ul>
                        <li>Fundamentals of React JS, React Native & Redux</li>
                      </ul>
                    </Typography>
                  </div>
                  <div className={classes.listItemDiv}>
                    <Typography variant="h5">Machine Learning</Typography>
                    <Typography>
                      <span className={classes.dateStyle}>Nov 2019 | </span>
                      Stanford University, Coursera
                      <ul>
                        <li>
                          Fundamentals of machine learning, supervised,
                          unsupervised learning, recommender system and
                          artificial neural networks
                        </li>
                      </ul>
                    </Typography>
                  </div>
                  <div className={classes.listItemDiv}>
                    <Typography variant="h5">
                      MSc. Information Technology
                    </Typography>
                    <Typography>
                      <span className={classes.dateStyle}>Sep 2019 | </span>
                      University of Education, Lahore PK
                    </Typography>
                  </div>
                </Typography>
              </Paper>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Experience;
