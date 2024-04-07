import { Field, useFormikContext } from 'formik';
import { TextField } from '@mui/material';
import { getFormikFieldError } from '../../helpers/form-helper.js';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { enGB } from 'date-fns/locale/en-GB';

const BaseFormFields = () => {
  const { values, touched, errors, setFieldValue } = useFormikContext();

  console.log(errors);

  return (
    <>
      <Field
        name="city_from"
        as={TextField}
        label="City from"
        error={getFormikFieldError('city_from', touched, errors)}
        helperText={getFormikFieldError('city_from', touched, errors)}
      />
      <Field
        name="city_to"
        as={TextField}
        label="City to"
        error={getFormikFieldError('city_to', touched, errors)}
        helperText={getFormikFieldError('city_to', touched, errors)}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB}>
        <Field
          component={DatePicker}
          name="dispatch_date"
          label="Dispatch date"
          value={values.dispatch_date ? new Date(values.dispatch_date) : null}
          onChange={(value) => setFieldValue('dispatch_date', value)}
        />
      </LocalizationProvider>
    </>
  );
};

export default BaseFormFields;
