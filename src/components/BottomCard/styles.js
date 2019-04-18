export default {
  card: {
    maxWidth: 282,
    background: 'transparent',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: '0.3s',
    // border: '1px solid blue',
    '&:hover': {
      transform: 'scale(1.03)',
      transition: '0.3s'
    }
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 32,
  },
  title1: {
    fontSize: 32,
    color: '#5F92CE',
    textAlign: 'center',
  },
  title2: {
    fontSize: 32,
    color: '#9453C9',
    textAlign: 'center',
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    fontSize: 18,
    color: '#787E9E',
    textAlign: 'center',
    fontWeight: 300,
  },
  button: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#C2C4D3',
  }
}