export const classes = {
  cardWrapper: {
    position: 'relative',
    padding: '6px',
    height: '100%',
    boxSizing: 'border-box',
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  destination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },

  bottomButtons: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  modalWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  },

  formWrapper: {
    '& form': {
      width: '100%',
      maxWidth: '80% !important',
    },
  },
};
