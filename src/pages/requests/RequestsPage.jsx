import { useParams } from 'react-router-dom';
import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import RequestsListItem from '../../components/RequestsListItem/RequestsListItem.jsx';
import { classes } from './styles.js';
import {
  sortByCreationDate,
  sortByDispatchDate,
} from '../../helpers/requests-helper.js';
import { useEffect, useState } from 'react';

function RequestsPage() {
  const params = useParams();
  const users = useSelector((state) => state.usersRequests);
  const usersArray = Object.keys(users);

  const [requestsToRender, setRequestsToRender] = useState([]);

  const getRequests = () => {
    if (params.id) {
      return users[params.id].requests.map((request) => {
        return { ...request, userId: params.id };
      });
    } else {
      return usersArray.flatMap((user) => {
        return users[user].requests.map((request) => {
          return { ...request, userId: user };
        });
      });
    }
  };

  useEffect(() => {
    setRequestsToRender(sortByCreationDate(getRequests()));
  }, [users]);

  return (
    <>
      <Typography align="center" variant="h2">
        {params.id
          ? params.id.charAt(0).toUpperCase() + params.id.slice(1)
          : 'All users'}{' '}
        requests list
      </Typography>

      <Box sx={classes.filterButtonsWrapper}>
        <ButtonGroup>
          <Button
            onClick={() =>
              requestsToRender.length &&
              setRequestsToRender(sortByCreationDate(getRequests()))
            }
          >
            Sort by date of creation
          </Button>
          <Button
            onClick={() =>
              requestsToRender.length &&
              setRequestsToRender(sortByDispatchDate(getRequests()))
            }
          >
            Sort by date of dispatch
          </Button>
        </ButtonGroup>
      </Box>

      <Grid container spacing={2}>
        {requestsToRender.map((request) => {
          return <RequestsListItem request={request} key={request.id} />;
        })}
      </Grid>

      {!requestsToRender.length && (
        <Typography align="center" variant="h5">
          There is no requests
        </Typography>
      )}
    </>
  );
}

export default RequestsPage;
