import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    MenuItem,
    Menu,
    Button,
    useMediaQuery
} from '@material-ui/core';
import { withRouter, NavLink } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "#000000"
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    },
    color: "#665df5",
    textAlign: "left"
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
      color: "#000000"
  },
  appbar: {
      background: "transparent",
      boxShadow: "none"
  }
}));
const activeNav = {
  borderBottom: "2px solid #665df5"
}

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/"
    },
    {
      menuTitle: "Resume",
      pageURL: "/resume"
    },
    {
      menuTitle: "Portfolio",
      pageURL: "/portfolio"
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact"
    }
  ];

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
            <Typography variant="h4" className={classes.title}>
              MR
            </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                CONTACT         className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button component={NavLink} exact to="/" activeStyle={activeNav}>
                  <Typography className={classes.button}>HOME</Typography>
              </Button>
              <Button component={NavLink} exact to="/resume" activeStyle={activeNav}>
                  <Typography className={classes.button}>RESUME</Typography>
              </Button>
              <Button component={NavLink} exact to="/portfolio" activeStyle={activeNav}>
                  <Typography className={classes.button}>PORTFOLIO</Typography>
              </Button>
              <Button component={NavLink} exact to="/contact" activeStyle={activeNav}>
                  <Typography className={classes.button}>CONTACT</Typography>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
