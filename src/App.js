import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Map from './components/Map';
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
        <Map />
        <div className={classes.bottomCardsGroup}>
          <BottomCard
            type="primary"
            title="1. Reliability"
            iconName="icon1"
          />
          <BottomCard
            type="secondary"
            title="2. Perfromance"
            iconName="icon2"
          />
          <BottomCard
            type="primary"
            title="3. Scaleability"
            iconName="icon3"
          />
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(App);