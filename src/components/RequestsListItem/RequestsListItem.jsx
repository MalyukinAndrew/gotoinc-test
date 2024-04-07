import {
  Box,
  Button,
  Divider,
  Grid,
  Modal,
  Paper,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import { classes } from './styles.js';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteRequest } from '../../store/requests-slice.js';
import { useState } from 'react';
import OrderForm from '../Form/OrderForm.jsx';
import DeliveryForm from '../Form/DeliveryForm.jsx';
import MatchingModal from '../MatchingModal/MatchingModal.jsx';
import { format } from 'date-fns';

const RequestsListItem = ({ request, md = null }) => {
  const dispatch = useDispatch();
  const params = useParams();

  const modalInitial = { edit: false, matching: false };
  const [openModal, setOpenModal] = useState(modalInitial);

  const handleOpenModal = (e) => {
    setOpenModal((prev) => {
      return { ...prev, [e.target.name]: true };
    });
  };
  const handleCloseModal = () => {
    setOpenModal(modalInitial);
  };

  return (
    <Grid item xs={12} md={md ? md : 6}>
      <Paper sx={classes.cardWrapper} elevation={3}>
        <Box sx={classes.header}>
          <Typography variant="subtitle1">
            <b>Created by: </b>
            {request.userId.toUpperCase()}
          </Typography>
          <Typography variant="subtitle1">
            <b>Created at: </b>
            {format(request.created_at, 'dd.MM.yyyy HH:mm')}
          </Typography>
        </Box>
        <Divider />
        <Box sx={classes.destination}>
          <Typography variant="subtitle1">
            <b>From: </b>
            {request.city_from}
          </Typography>
          <Typography variant="subtitle1">
            <b>To: </b>
            {request.city_to}
          </Typography>
        </Box>

        {request.parcel_type && (
          <Typography variant="subtitle1">
            <b>Parcel type: </b>
            {request.parcel_type}
          </Typography>
        )}

        {request.dispatch_date && (
          <Typography variant="subtitle1">
            <b>Dispatch date: </b>
            {format(request.dispatch_date, 'dd.MM.yyyy')}
          </Typography>
        )}

        {request.parcel_description && (
          <Typography variant="subtitle1">
            <b>Description: </b>
            {request.parcel_description}
          </Typography>
        )}

        <Typography variant="subtitle1">
          <b>Request type: </b>
          {request.type}
        </Typography>

        {params.id && !md && (
          <Box sx={classes.bottomButtons}>
            <Button name="matching" size="small" onClick={handleOpenModal}>
              Matching requests
            </Button>
            <Button name="edit" size="small" onClick={handleOpenModal}>
              Edit
            </Button>
            <Button
              size="small"
              onClick={() =>
                dispatch(
                  deleteRequest({ userId: params.id, requestId: request.id }),
                )
              }
            >
              Delete
            </Button>
          </Box>
        )}
      </Paper>

      <Modal open={openModal.edit} onClose={handleCloseModal}>
        <Box sx={classes.modalWrapper}>
          <Typography align="center" variant="h5">
            Edit request
          </Typography>
          <Box sx={classes.formWrapper}>
            {request.type === 'order' ? (
              <OrderForm
                requestData={request}
                closeModalAfterSubmit={handleCloseModal}
              />
            ) : (
              <DeliveryForm
                requestData={request}
                closeModalAfterSubmit={handleCloseModal}
              />
            )}
          </Box>
        </Box>
      </Modal>

      {openModal.matching && (
        <MatchingModal
          open={openModal.matching}
          onClose={handleCloseModal}
          requestId={request.id}
        />
      )}
    </Grid>
  );
};

RequestsListItem.propTypes = {
  request: PropTypes.object,
  md: PropTypes.number,
};

export default RequestsListItem;
