import React from 'react';
import {
    CssBaseline,
    Grid,
    Typography,
    Grow,
    Fab,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './cover.css';
import { frontEndSkills, backEndSkills, otherSkills } from './constants';
import Experience from './Experience';

const useStyles = makeStyles((theme) => ({
    textMargin: {
        marginBottom: 20
    },
    fSkill: {
        width: 100,
        height: 100,
        marginRight: 20,
        marginBottom: 20,
        color: "#665df5",
        backgroundColor: "#ffffff",
        fontWeight: "bold",
        fontSize: 12,
        border: "1px solid #665df5",
    }
}))


const Resume = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4" style={{marginBottom: 40}}>Skills</Typography>
            <CssBaseline />
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '60vh' }}
            >
                <Grid xs={10} sm={12}>
                    <Typography variant="h4" className={classes.textMargin}>Front end</Typography>
                    {frontEndSkills.map((item, index) => (
                        <Grow in={true} timeout={1800}>
                            <Fab className={classes.fSkill} key={index}>{item}</Fab>
                        </Grow>
                    ))}
                </Grid>
                <Grid xs={10} sm={6}>
                    <Typography variant="h4" className={classes.textMargin}>Back end</Typography>
                    {backEndSkills.map((item, index) => (
                        <Grow in={true} timeout={1800}>
                            <Fab className={classes.fSkill} key={index}>{item}</Fab>
                        </Grow>
                    ))}
                </Grid>
                <Grid xs={10} sm={6}>
                    <Typography variant="h4" className={classes.textMargin}>Other</Typography>
                    {otherSkills.map((item, index) => (
                        <Grow in={true} timeout={1800}>
                            <Fab className={classes.fSkill} key={index}>{item}</Fab>
                        </Grow>
                    ))}
                </Grid>
                <Grid xs={10} sm={10}>
                    <Typography variant="h4" className={classes.textMargin}>Experience & Education</Typography>
                    <Experience />
                </Grid>
            </Grid>
        </div>
    )
}

export default Resume
