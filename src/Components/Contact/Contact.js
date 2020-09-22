import React from 'react';
import {
    CssBaseline,
    Grid,
    Typography,
    Paper,
    Grow
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import contactIMG from '../Assets/contact.svg';
import '../Styles/cover.css';
import mail from '../Assets/mail.svg';
import linkedin from '../Assets/linkedin.svg';
import github from '../Assets/github.svg';
import phone from '../Assets/phone.svg';


const useStyles = makeStyles((theme) => ({
    paper: {
        width: 300,
        height: 115,
        marginBottom: 20,
        paddingTop: 15,
        border: "1px solid #665df5",
        '&:hover': {
            boxShadow: "-1px 10px 29px 0px rgba(0,0,0,0.8)",
          }
    }
}))


const Contact = () => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h4">Get in Touch</Typography>
            <CssBaseline />
            <Grid
            container
            spacing={0}
            direction="row"
            alignItems="center"
            justify="center"
            style={{ minHeight: '80vh' }}
            >
                <Grid xs={10} sm={4}>
                    <Grid>
                        <Grow in={true} timeout={1800}>
                            <Paper elevation={10} className={classes.paper}>
                                    <img src={mail} width="40" alt="mail" />
                                    <Typography>mdraheel776@gmail.com</Typography>
                                    <Typography>md_raheel@outlook.com</Typography>
                            </Paper>
                        </Grow>
                    </Grid>
                    <Grid>
                        <Grow in={true} timeout={1800}>
                            <Paper elevation={10} className={classes.paper}>
                                <a href="https://www.linkedin.com/in/m-raheel"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none", color: "black"
                                }}
                                >
                                    <img src={linkedin} width="40" alt="linkedin" />
                                    <Typography>m-raheel</Typography>
                                </a>
                            </Paper>
                        </Grow>
                    </Grid>
                    <Grid>
                        <Grow in={true} timeout={1800}>
                            <Paper elevation={10} className={classes.paper}>
                                <a href="https://github.com/md-raheel"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    textDecoration: "none", color: "black"
                                }}
                                >
                                    <img src={github} width="40" alt="github" />
                                    <Typography>md-raheel</Typography>
                                </a>
                            </Paper>
                        </Grow>
                    </Grid>
                    <Grid>
                        <Grow in={true} timeout={1800}>
                            <Paper elevation={10} className={classes.paper}>
                                <img src={phone} width="40" alt="phone" />
                                <Typography>+92 344 4200776</Typography>
                            </Paper>
                        </Grow>
                    </Grid>
                </Grid>
                <Grid xs={10} sm={6}>
                    <img className="img" src={contactIMG} alt="contact" width="70%" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Contact
