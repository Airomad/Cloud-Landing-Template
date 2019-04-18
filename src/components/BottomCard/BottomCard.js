import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

class BottomCard extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title1}>
            1. Reliability
          </Typography>
          <Typography variant="body1" component="p" className={classes.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris eget blandit ligula, eget mattis sapien.
            Pellentesque sit amet varius turpis. Morbi id orci augue
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>Read More</Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(BottomCard);