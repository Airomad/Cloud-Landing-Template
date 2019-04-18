import mapImage from './map.png';

export default {
  root: {
    display: 'block',
    maxWidth: 1000,
    width: '90%',
    height: 500,
    position: 'relative',
  },
  map: {
    display: 'block',
    maxWidth: 1000,
    width: '90%',
    height: 500,
    backgroundImage: `url(${mapImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    marginTop: 27,
  },
  marker: {
    position: 'absolute',
    width: 10,
    height: 10,
    left: 10,
    top: 10,
  }
}