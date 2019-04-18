import bgImage from './bg.png';

const styles = theme => ({
  root: {
    backgroundColor: '#0F1024',
    display: 'flex',
    flex: 1,
  },
  bgImage: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
  titleContainer: {
    maxWidth: 750,
    marginLeft: 24,
    marginRight: 24,
    marginTop: 56,
  },
  h1: {
    fontSize: 47,
    fontWeight: 300,
    color: '#D6D5D5',
    textAlign: 'center',
  },
  marked: {
    color: '#B363D2',
  },
  bottomCardsGroup: {
    width: 1100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 'auto',
  }
});

export default styles;

