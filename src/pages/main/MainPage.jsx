import { Box, List, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import UsersListItem from '../../components/UsersListItem/UsersListItem.jsx';

const MainPage = () => {
  const users = useSelector((state) => state.usersRequests);

  return (
    <Box>
      <Typography align="center" variant="h2">
        Main page
      </Typography>

      <List>
        {Object.values(users).map((user, index) => (
          <UsersListItem user={user} index={index} key={user.id} />
        ))}
      </List>
    </Box>
  );
};

export default MainPage;
