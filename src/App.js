import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TopBar from './components/TopBar';
import BottomCard from './components/BottomCard';
import styles from './styles';
import Typography from '@material-ui/core/Typography';

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.bgImage}>
        <TopBar />
        <div className={classes.titleContainer}>
          <Typography variant="h3" color="inherit" className={classes.h1}>
            Build your website on the Fastest Cloud in the <span className={classes.marked}>World</span>
          </Typography>
        </div>
        <div className={classes.map}></div>
        <div className={classes.bottomCardsGroup}>
          <BottomCard />
          <BottomCard />
          <BottomCard />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);