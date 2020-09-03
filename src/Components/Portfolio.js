import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Typography,
    Container,
    Paper,
    Grow
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const cards = [1, 2, 3];

const Portfolio = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Typography variant="h4">
              Projects
        </Typography>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                  <Grow in={true} timeout={1500}>
                    <Paper elevation={10}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                Heading
                                </Typography>
                                <Typography>
                                This is a media card. You can use this section to describe the content.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                View
                                </Button>
                                <Button size="small" color="primary">
                                Edit
                                </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </Grow>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Portfolio;