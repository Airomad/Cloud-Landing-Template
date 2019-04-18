export default {
  root: {
    height: 64,
    boxShadow: 'none',
    backgroundColor: '#1A1E31',
  },
  brand: {
    flexGrow: 1,
    color: 'white',
    fontWeight: 'normal',
    marginLeft: 8,
  },
  button: {
    fontSize: 16,
    color: '#605C85',
    letterSpacing: 1.24,
    marginLeft: 16,
    marginRight: 16,
    fontWeight: 'normal',
  },
  actionContainer: {
    background: 'linear-gradient(to right, #6B40BE, #C16AD6)',
    padding: 1,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 9,
  },
  actionButton: {
    backgroundColor: '#1A1E31',
    fontSize: 16,
    margin: 0,
    borderRadius: 9,
    border: 'none',
    color: '#9A46D1',
    fontWeight: 'normal',
    '&:hover': {
      color: '#1A1E31',
    }
  },
  actionButtonText: {
    background: '-webkit-linear-gradient(#eee, #333)',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
  }
}
