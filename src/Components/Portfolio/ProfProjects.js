import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  Paper,
  Grow,
} from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { professionalProjects } from "../constants.js";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: 400,
    display: "flex",
    marginTop: 15,
    flexDirection: "column",
    "&:hover": {
      boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
    },
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  cardAction: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    color: "#665df5",
  },
}));

const ProfProjects = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (title) => {
    title === "Fly"
      ? window.open("https://fly.me")
      : title === "Clocky"
      ? history.push("/screenshots/clocky")
      : title === "UMS"
      ? history.push("/screenshots/ums")
      : alert("In Progress");
  };

  return (
    <div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h5">Professional</Typography>
        <Grid container spacing={4}>
          {professionalProjects.map((card) => {
            const { title, imgURL, description } = card;
            return (
              <Grid item key={title} xs={12} sm={6} md={4}>
                <Grow in={true} timeout={1500}>
                  <Paper elevation={10}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={imgURL}
                        title={title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {title}
                        </Typography>
                        <Typography>{description}</Typography>
                      </CardContent>
                      <CardActions className={classes.cardAction}>
                        <Button
                          size="large"
                          color="primary"
                          className={classes.button}
                          onClick={() => handleClick(title)}
                        >
                          View
                        </Button>
                        <Button
                          size="large"
                          color="primary"
                          className={classes.button}
                          startIcon={<VisibilityOffIcon />}
                          disabled
                        >
                          Source
                        </Button>
                      </CardActions>
                    </Card>
                  </Paper>
                </Grow>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ProfProjects;
