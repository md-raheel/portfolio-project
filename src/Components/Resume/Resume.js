import React from "react";
import { CssBaseline, Grid, Typography, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../Styles/cover.css";
import { frontEndSkills, backEndSkills, otherSkills } from "../constants";
import Experience from "./Experience";

const useStyles = makeStyles((theme) => ({
  textMargin: {
    marginBottom: 20,
    marginTop: 20,
  },
  chip: {
    width: 135,
    fontSize: 18,
    marginRight: 10,
    marginBottom: 10,
    color: "#665df5",
    border: "1px solid #665df5",
    "&:hover": {
      boxShadow: "-1px 6px 18px 0px rgba(0,0,0,0.8)",
    },
  },
  imgStyle: {
    width: 80,
    marginRight: 25,
  },
  imgDiv: {
    display: "block",
    float: "left",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="h4" style={{ marginBottom: 20 }}>
        Skills
      </Typography>
      <CssBaseline />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "60vh" }}
      >
        <Grid xs={2} sm={2}></Grid>
        <Grid xs={8} sm={8}>
          <Typography variant="h5" className={classes.textMargin}>
            Front end
          </Typography>
          {frontEndSkills.map((item, index) => {
            const { title, imgURL } = item;
            return (
              <Grow in={true} timeout={1800}>
                <div className={classes.imgDiv}>
                  <img
                    className={classes.imgStyle}
                    key={index}
                    src={imgURL}
                    alt={title}
                  />
                  <Typography style={{ marginRight: 20 }}>{title}</Typography>
                </div>
              </Grow>
            );
          })}
        </Grid>
        <Grid xs={8} sm={8}>
          <Typography variant="h5" className={classes.textMargin}>
            Back end
          </Typography>
          {backEndSkills.map((item, index) => {
            const { title, imgURL } = item;
            return (
              <Grow in={true} timeout={1800}>
                <div className={classes.imgDiv}>
                  <img
                    className={classes.imgStyle}
                    key={index}
                    src={imgURL}
                    alt={title}
                  />
                  <Typography style={{ marginRight: 20 }}>{title}</Typography>
                </div>
              </Grow>
            );
          })}
        </Grid>
        <Grid xs={8} sm={8}>
          <Typography variant="h5" className={classes.textMargin}>
            Other
          </Typography>
          {otherSkills.map((item, index) => {
            const { title, imgURL } = item;
            return (
              <Grow in={true} timeout={1800}>
                <div className={classes.imgDiv}>
                  <img
                    className={classes.imgStyle}
                    key={index}
                    src={imgURL}
                    alt={title}
                  />
                  <Typography style={{ marginRight: 20 }}>{title}</Typography>
                </div>
              </Grow>
            );
          })}
        </Grid>
        <Grid xs={10} sm={10}>
          <Typography variant="h4" style={{ marginBottom: 30, marginTop: 50 }}>
            Experience & Education
          </Typography>
          <Experience />
        </Grid>
        <Grid xs={2} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default Resume;
