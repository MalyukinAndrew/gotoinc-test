import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { classes } from './styles.js';

const GoBackButton = () => {
  const navigate = useNavigate();
  return (
    <Button sx={classes.buttonWrapper} onClick={() => navigate(-1)}>
      {'<-'} Go back
    </Button>
  );
};

export default GoBackButton;
