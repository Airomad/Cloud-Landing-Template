import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Marker from './Marker';
import styles from './styles';

const MARKERS = [
  { x: 410, y: 110, key: 'marker1' },
  { x: 200, y: 120, key: 'marker2' },
  { x: 380, y: 140, key: 'marker3' },
  { x: 40, y: 170, key: 'marker4' },
  { x: 700, y: 170, key: 'marker5' },
  { x: 790, y: 140, key: 'marker6' },
];

class Map extends Component {
  targetMarkerPointer = -1;

  state = {
    activeMarker: null,
  };

  toggleMarker = (markerKey) => {
    this.setState({ activeMarker: this.state.activeMarker === markerKey ? null : markerKey });
  }

  turnOnNextMarker = () => {
    this.targetMarkerPointer += 1;
    if (this.targetMarkerPointer > MARKERS.length - 1) {
      this.targetMarkerPointer = 0;
    }
    const nextMarker = MARKERS[this.targetMarkerPointer];
    this.setState(
      { activeMarker: nextMarker.key },
      () => setTimeout(this.turnOnNextMarker, 1000)
    );
  }

  componentDidMount() {
    setTimeout(
      this.turnOnNextMarker,
      1000,
    );
  }

  render() {
    const { classes } = this.props;
    const { activeMarker } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.map}></div>
        {MARKERS.map(item => (
          <Marker
            key={item.key}
            itemKey={item.key}
            left={item.x}
            top={item.y}
            active={item.key === activeMarker}
            onClick={() => this.toggleMarker(item.key)}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(Map);
