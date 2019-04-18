import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const COLORS = {
  active: ['#3023AE', '#C86DD7'],
  normal: ['#3123AE', '#6DB2D7'],
}
class Marker extends Component {
  render() {
    const { classes, left, top, active, onClick, itemKey } = this.props;
    const style = { left, top };
    const colors = active ? COLORS.active : COLORS.normal;
    const linearId = `${itemKey}_linear`;
    const filterId = `${itemKey}_filter`;

    return (
      <button className={classes.root} style={style} onClick={onClick}>
        <svg width="45" height="54" viewBox="0 0 45 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter={`url(#${filterId})`}>
            <path clipRule="evenodd" d="M22.5 12C16.65 12 12 16.65 12 22.5C12 30.3 22.5 42 22.5 42C22.5 42 33 30.3 33 22.5C33 16.65 28.35 12 22.5 12V12ZM22.5 26.25C20.4 26.25 18.75 24.6 18.75 22.5C18.75 20.4 20.4 18.75 22.5 18.75C24.6 18.75 26.25 20.4 26.25 22.5C26.25 24.6 24.6 26.25 22.5 26.25V26.25Z" fill={`url(#${linearId})`} />
          </g>
          <defs>
            <filter id={filterId} x="0" y="0" width="45" height="54" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="6" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.304688 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
            <linearGradient id={linearId} x1="1.395" y1="27.3" x2="30.05" y2="47.1619" gradientUnits="userSpaceOnUse">
              <stop stopColor={colors[0]} />
              <stop offset="1" stopColor={colors[1]} />
            </linearGradient>
          </defs>
        </svg>

      </button>
    );
  }
}

export default withStyles(styles)(Marker);


