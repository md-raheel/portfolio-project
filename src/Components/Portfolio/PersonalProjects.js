import React from 'react';
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
    Tooltip
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { personalProjects } from '../constants.js';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: 400,
      display: 'flex',
      marginTop: 15,
      flexDirection: 'column',
      '&:hover': {
        boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)"
      }
  
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    cardAction: {
      display: "flex",
      justifyContent: "center"
    },
    button: {
      color: "#665df5"
    }
  }));


const PersonalProjects = () => {
    const classes = useStyles();
    const handleView = (view) => {
      window.open(view)
    }
    const handleSource = (source) => {
      window.open(source)
    }

    return (
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
            <Typography variant="h5">Personal</Typography>
            <Grid container spacing={4}>
                {personalProjects.map((card) => {
                  const { title, imgURL, description, view, source } = card;
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
                                        <Typography>
                                        {description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions className={classes.cardAction}>
                                        <Button size="large" color="primary" 
                                        className={classes.button}
                                        onClick={() => handleView(view)}
                                        >
                                        View
                                        </Button>
                                          <Tooltip title="Github link">
                                            <Button size="large" color="primary" 
                                            className={classes.button}
                                            startIcon={<VisibilityIcon />}
                                            onClick={() => handleSource(source)}
                                            >
                                              Source
                                            </Button>
                                          </Tooltip>
                                    </CardActions>
                                </Card>
                            </Paper>
                        </Grow>
                    </Grid>
                )})}
            </Grid>
            </Container>
        </div>
    )
}

export default PersonalProjects
