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
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: '0.3s',
    }
  }
};