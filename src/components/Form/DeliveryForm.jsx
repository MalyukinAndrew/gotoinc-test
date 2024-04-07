import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { addRequestToUser, editRequest } from '../../store/requests-slice.js';
import {
  formDataPrettier,
  formDataUpdatePrettier,
} from '../../helpers/form-helper.js';
import { Alert, Box, Button, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';
import { classes } from './styles.js';
import { Form, Formik } from 'formik';
import BaseFormFields from './BaseFormFields.jsx';
import { validationSchema } from './ValidationSchema.js';

const formDataInitial = {
  type: 'delivery',
  city_from: '',
  city_to: '',
  dispatch_date: null,
};
const DeliveryForm = ({
  requestData = formDataInitial,
  closeModalAfterSubmit = null,
}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  const closeSuccessMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSuccess(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    if (values.id) {
      dispatch(
        editRequest({
          userId: params.id,
          request: formDataUpdatePrettier(values),
        }),
      );
    } else {
      dispatch(
        addRequestToUser({
          userId: params.id,
          request: formDataPrettier(values),
        }),
      );
    }

    resetForm();
    setSuccess(true);

    if (closeModalAfterSubmit) {
      closeModalAfterSubmit();
    }
  };

  return (
    <Box sx={classes.formStyles}>
      <Formik
        initialValues={requestData}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
            <Form>
              <BaseFormFields />

              <Button variant="contained" type="submit">
                Submit
              </Button>

              <Snackbar
                open={success}
                autoHideDuration={7000}
                onClose={closeSuccessMessage}
              >
                <Alert
                  sx={{ display: 'flex', alignItems: 'center' }}
                  severity="success"
                >
                  Successfully created request
                  <Button
                    size="small"
                    onClick={() => navigate(`/${params.id}/requests`)}
                  >
                    {"See user's requests"}
                  </Button>
                </Alert>
              </Snackbar>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

DeliveryForm.propTypes = {
  requestData: PropTypes.object,
  closeModalAfterSubmit: PropTypes.func,
};

export default DeliveryForm;
