import React from 'react';

const Icon1 = () => (
  <svg width="66" height="44" viewBox="0 0 66 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M39 0L27.6 18.3333L36.3 32.2667L31.5 36.6667C26.4 28.6 18 14.6667 18 14.6667L0 44H66L39 0Z" fill="url(#card_icon_1_linear)" />
    <defs>
      <linearGradient id="card_icon_1_linear" x1="-90.2285" y1="16.5411" x2="-19.6008" y2="110.074" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3023AE" />
        <stop offset="1" stopColor="#6DB2D7" />
      </linearGradient>
    </defs>
  </svg>
);

const Icon2 = () => (
  <svg width="45" height="60" viewBox="0 0 45 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M27 0C27 0 28.8 7.5 28.8 13.5C28.8 19.2 24.9 24 19.2 24C13.5 24 9 19.2 9 13.5V12.6C3.3 19.5 0 28.2 0 37.5C0 49.8 10.2 60 22.5 60C34.8 60 45 49.8 45 37.5C45 22.2 38.1 8.7 27 0V0ZM22.5 51C17.4 51 13.5 47.1 13.5 42.3C13.5 37.8 16.5 34.5 21.3 33.6C26.4 32.7 31.5 30.3 34.2 26.4C35.4 30 36 33.9 36 37.8C36 45 30 51 22.5 51V51Z" fill="url(#card_icon_2_linear)" />
    <defs>
      <linearGradient id="card_icon_2_linear" x1="-22.725" y1="30.6" x2="35.8654" y2="74.112" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3023AE" />
        <stop offset="1" stopColor="#C86DD7" />
      </linearGradient>
    </defs>
  </svg>
);

const Icon3 = () => (
  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M40 40H5V5H22.5V0H5C2.25 0 0 2.25 0 5V40C0 42.75 2.25 45 5 45H40C42.75 45 45 42.75 45 40V22.5H40V40V40ZM27.5 0V5H36.5L12 29.5L15.5 33L40 8.5V17.5H45V0H27.5V0Z" fill="url(#card_icon_3_linear)" />
    <defs>
      <linearGradient id="card_icon_3_linear" x1="-61.5194" y1="16.917" x2="13.0029" y2="82.7112" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3023AE" />
        <stop offset="1" stopColor="#6DB2D7" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Icon({ name }) {
  if (name === 'icon1') {
    return <Icon1 />;
  } else if (name === 'icon2') {
    return <Icon2 />;
  } else if (name === 'icon3') {
    return <Icon3 />;
  }
  return null;
}
