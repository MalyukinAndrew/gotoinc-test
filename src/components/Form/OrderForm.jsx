import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from '@mui/material';
import { parcels } from '../../constants/constants.js';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { addRequestToUser, editRequest } from '../../store/requests-slice.js';
import {
  formDataPrettier,
  formDataUpdatePrettier,
} from '../../helpers/form-helper.js';
import PropTypes from 'prop-types';
import { classes } from './styles.js';
import { Field, Form, Formik } from 'formik';
import BaseFormFields from './BaseFormFields.jsx';
import { validationSchema } from './ValidationSchema.js';

const formDataInitial = {
  type: 'order',
  city_from: '',
  city_to: '',
  parcel_type: '',
  dispatch_date: null,
  parcel_description: '',
};

const OrderForm = ({
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

              <FormControl fullWidth>
                <InputLabel id="parcel-select-label">Type of parcel</InputLabel>
                <Field
                  as={Select}
                  labelId="parcel-select-label"
                  name="parcel_type"
                  label="Type of parcel"
                >
                  {parcels.map((parcel) => {
                    return (
                      <MenuItem key={parcel} value={parcel}>
                        {parcel}
                      </MenuItem>
                    );
                  })}
                </Field>
              </FormControl>

              <Field
                as={TextField}
                name="parcel_description"
                label="Parcel description"
                multiline
                rows={3}
              />

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

OrderForm.propTypes = {
  requestData: PropTypes.object,
  closeModalAfterSubmit: PropTypes.func,
};

export default OrderForm;
