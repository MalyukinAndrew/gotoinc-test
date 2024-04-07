import {
  Avatar,
  Box,
  Divider,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { classes } from './styles.js';
import PropTypes from 'prop-types';

const UsersListItem = ({ user, index }) => {
  return (
    <Paper elevation={3} sx={classes.paperWrapper}>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            sx={classes.avatar}
            alt={`${user.id} avatar`}
            src={`https://i.pravatar.cc/100?img=${index + 3}`}
          />
        </ListItemAvatar>
        <ListItemText
          sx={classes.name}
          primary={user.id}
          secondary={
            <Box sx={classes.linksWrapper}>
              <Link
                underline="hover"
                variant="subtitle1"
                to={`${user.id}/create`}
                component={RouterLink}
              >
                create request
              </Link>
              <Divider orientation="vertical" sx={classes.divider} flexItem />
              <Link
                underline="hover"
                variant="subtitle1"
                to={`${user.id}/requests`}
                component={RouterLink}
              >
                requests list
              </Link>
            </Box>
          }
        />
      </ListItem>
    </Paper>
  );
};

UsersListItem.propTypes = {
  index: PropTypes.number,
  user: PropTypes.object,
};

export default UsersListItem;
