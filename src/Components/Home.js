import React from 'react';
import { 
    Grid, 
    Typography, 
    CssBaseline, 
    Button,
    Zoom,
    Slide
} from '@material-ui/core';
import './Home.css';
import cover from './Assets/cover.svg';
import './cover.css';


const Home = () => {
    return (
        <div className="home">
            <CssBaseline />
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '85vh' }}
            >
                <Grid item xs></Grid>
                <Grid item xs={8}>
                    <Zoom in={true} timeout={1200}>
                        <Typography variant="h3">
                            Hi, I'm <strong style={{color: "#665df5"}}>Muhammad Raheel</strong>
                        </Typography>
                    </Zoom>
                    <Slide in={true} direction="up" timeout={1400}>
                        <Typography variant="h5">
                            Web Developer, AI Enthusiast & Learner
                        </Typography>
                    </Slide>
                    <div style={{marginTop: 40, marginBottom: 30}}>
                        <img className="img" src={cover} width="40%" />
                    </div>
                    <Button variant="outlined"
                    style={{
                        color: "#665df5",
                        border: "1px solid #665df5",
                        boxShadow: "3px 3px 8px #665df5"
                    }}
                    >Download Resume</Button>
                </Grid>
                <Grid item xs></Grid>
            </Grid>
        </div>
    )
}

export default Home
