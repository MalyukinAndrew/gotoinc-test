import { Box, Grid, Modal, Typography } from '@mui/material';
import { classes } from './styles.js';
import RequestsListItem from '../RequestsListItem/RequestsListItem.jsx';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { isBefore } from 'date-fns/isBefore';
import { isEqual } from 'date-fns/isEqual';

const MatchingModal = ({ open, onClose, requestId }) => {
  const users = useSelector((state) => state.usersRequests);
  const usersArray = Object.keys(users);
  const [allRequests, setAllRequests] = useState([]);
  const [matchingRequests, setMatchingRequests] = useState([]);

  const getRequests = () => {
    return usersArray.flatMap((user) => {
      return users[user].requests.map((request) => {
        return { ...request, userId: user };
      });
    });
  };

  const findMatchingRequests = () => {
    if (allRequests.length) {
      const requestToSearchBy =
        allRequests[
          allRequests.findIndex((request) => request.id === requestId)
        ];
      const requestsToRender = allRequests.filter((request) => {
        return (
          request.city_from === requestToSearchBy.city_from &&
          request.city_to === requestToSearchBy.city_to &&
          (isBefore(request.dispatch_date, requestToSearchBy.dispatch_date) ||
            isEqual(request.dispatch_date, requestToSearchBy.dispatch_date))
        );
      });

      setMatchingRequests(
        requestsToRender.filter(
          (request) => request.id !== requestToSearchBy.id,
        ),
      );
    }
  };

  useEffect(() => {
    findMatchingRequests();
  }, [allRequests]);

  useEffect(() => {
    setAllRequests(getRequests());
  }, []);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={classes.modalWrapper}>
        {Boolean(matchingRequests.length) && (
          <Grid container spacing={2}>
            {matchingRequests.length &&
              matchingRequests.map((request) => (
                <RequestsListItem md={12} key={request.id} request={request} />
              ))}
          </Grid>
        )}
        {!matchingRequests.length && (
          <Typography variant="h4">There is no matching requests</Typography>
        )}
      </Box>
    </Modal>
  );
};

MatchingModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  requestId: PropTypes.string,
};
export default MatchingModal;
