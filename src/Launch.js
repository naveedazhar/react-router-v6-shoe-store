import React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@material-ui/core";

import { Outlet } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

const navLinks = [
  { title: `Feed`, path: `/launch/feed` },
  { title: `In Stock`, path: `/launch/in-stock` },
  { title: `Upcoming`, path: `/launch/upcoming` },
];

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `center`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    backgroundColor: "inherit",
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `#111`,
  },
});

export default function Launch() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: "inherit" }}>
        <Toolbar>
          <Container maxWidth="md" className={classes.navbarDisplayFlex}>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <a href={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </a>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
}
