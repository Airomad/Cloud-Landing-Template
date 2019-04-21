export default {
  root: {
    display: 'flex',
    justiContent: 'center',
    alignItems: 'center',
    padding: 0,
    position: 'absolute',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    transition: '0.5s',
    transform: 'scale(1)',
    '&:hover': {
      transform: 'scale(1.2)',
      transition: '0.5s',
    }
  },
  active: {
    transform: 'scale(1.4)',
    transition: '0.5s',
  }
};