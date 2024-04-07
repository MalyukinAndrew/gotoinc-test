import { useParams } from 'react-router-dom';
import { Box, Button, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
const CreatePage = () => {
  return (
    <>
      <Typography align="center" variant="h2">
        What will you do today?
      </Typography>
      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
        }}
      >
        <Link to="order" component={RouterLink}>
          <Button variant="contained">Create order</Button>
        </Link>

        <Link to="deliver" component={RouterLink}>
          <Button variant="contained">Create delivery</Button>
        </Link>
      </Box>
    </>
  );
};

export default CreatePage;
