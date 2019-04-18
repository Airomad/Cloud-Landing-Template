import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';

class TopBar extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.text}>
            Cloud
          </Typography>
          <Button color="inherit" className={classes.button}>Locations</Button>
          <Button color="inherit" className={classes.button}>Costs</Button>
          <Button color="inherit" className={classes.button}>Help</Button>
          <div className={classes.actionContainer}>
            <Button color="inherit" className={classes.actionButton}>
              Register
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(TopBar);