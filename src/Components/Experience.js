import React from 'react';
 import {
     Typography,
     Grid,
     Paper,
     Slide,
     Box,
     Divider
 } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';
 import resume from './Assets/resume.svg';
 import './cover.css';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(90),
          height: theme.spacing(135),
        },
      },
    paper: {
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        padding: 40,
        border: "1px solid #665df5",
    },
    divider: {
        border: "2px solid #665df5",
        marginTop: 80,
        marginBottom: 30
    },
    dateStyle: {
        color: "#665df5",
        fontWeight: "bold"
    },
    listItemDiv: {
        textAlign: "left"
    }
}))


const Experience = () => {
    const classes = useStyles();
    return (
        <Grid container 
        spacing={2} 
        direction="row"
        alignItems="center"
        >
            <Grid item xs={10} sm={8}>
                <Grid item>
                    <div className={classes.root}>
                        <Box>
                            <Paper className={classes.paper} elevation={10}>
                                <Typography variant="h5">
                                    React Developer
                                </Typography>
                                <Typography>
                                    <span className={classes.dateStyle}>Jan 2020 - Present | </span>
                                    Cybros Developers, Lahore
                                </Typography>
                                <Typography>
                                    <div style={{textAlign: "left", marginBottom: 30}}>
                                        <ul>
                                            <li>
                                                here it goes
                                            </li>
                                            <li>
                                                here it goes
                                            </li>
                                            <li>
                                                here it goes
                                            </li>
                                        </ul>
                                        <span className={classes.dateStyle}>Tools: </span>
                                            HTML, CSS, Material UI, ReactStrap, ReactJS, Node JS, Redux, Formik, Lodash, Google APIs, Rest APIs, Mysql, Git, Github, GitLab, Jira
                                    </div>
                                </Typography>
                                <Typography variant="h5">
                                    Data Analyst Intern
                                </Typography>
                                <Typography>
                                    <span className={classes.dateStyle}>Oct 2019 - Dec 2019 | </span>
                                    Cybros Developers, Lahore
                                </Typography>
                                <Typography>
                                    <div className={classes.listItemDiv}>
                                        <ul>
                                            <li>
                                                Implemented Data Exploratory Analysis to find flight trends and 
                                                customer demand to predict price of flights
                                            </li>
                                            <li>
                                                Performed Data Enrichment jobs to deal missing value, to normalize data, and to select features
                                            </li>
                                            <li>
                                                Write Python scripts to parse large amount of JSON documents 
                                                to CSV format for data analysis.
                                            </li>
                                            <li>
                                                Worked on predictive analytics use-cases using Python language
                                            </li>
                                        </ul>
                                        <span className={classes.dateStyle}>Tools: </span> Python, Pandas, Numpy, Matplitlib, Seaborn, Google Colaboratory, Scikit-learn, Git, Jira
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
                                                <li>
                                                    Fundamentals of React JS, React Native & Redux
                                                </li>
                                            </ul>
                                        </Typography>
                                    </div>
                                    <div className={classes.listItemDiv}>
                                        <Typography variant="h5">
                                            Machine Learning
                                        </Typography>
                                        <Typography>
                                            <span className={classes.dateStyle}>Nov 2019 | </span>
                                                Stanford University, Coursera
                                            <ul>
                                                <li>
                                                    Fundamentals of machine learning, supervised, unsupervised learning, 
                                                    recommender system and artificial neural networks
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
            <Grid item xs={2} sm={4}>
                <Grid>
                    <Slide in={true} direction="down" timeout={5000}>
                        <img className="img" src={resume} width="110%" />
                    </Slide>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Experience
