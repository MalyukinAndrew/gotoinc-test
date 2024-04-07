import { Box, Link, Typography } from '@mui/material';
import logo from '../../assets/box-logo.png';
import { NavLink } from 'react-router-dom';
import { classes } from './styles.js';

const Navigation = () => {
  return (
    <Box sx={classes.navigation}>
      <Box sx={classes.imageWrapper}>
        <img width="100px" height="100px" src={logo} alt="company logo" />
        <Typography variant="h5">Best way to deliver for sure</Typography>
      </Box>

      <Box sx={classes.linksWrapper}>
        <Link to="/" underline="hover" component={NavLink}>
          Main
        </Link>
        <Link to="requests" underline="hover" component={NavLink}>
          All requests
        </Link>
      </Box>
    </Box>
  );
};

export default Navigation;
