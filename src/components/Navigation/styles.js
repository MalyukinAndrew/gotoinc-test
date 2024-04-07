export const classes = {
  linksWrapper: {
    display: 'flex',
    gap: '16px',
    fontSize: '20px',

    a: {
      '&.active': {
        fontWeight: 500,
        fontSize: '21px',
        textDecoration: 'underline',
      },
    },
  },

  imageWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },

  navigation: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
};
