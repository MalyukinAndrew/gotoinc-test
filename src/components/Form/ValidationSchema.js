import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  city_from: yup
    .string()
    .min(3, 'Must be at least 3 symbols')
    .max(256, "Can't be more than 256 symbols")
    .required('This field is required'),

  city_to: yup
    .string()
    .min(3, 'Must be at least 3 symbols')
    .max(256, "Can't be more than 256 symbols")
    .required('This field is required'),

  parcel_description: yup
    .string()
    .nullable()
    .min(3, 'Must be at least 3 symbols')
    .max(500, "Can't be more than 500 symbols"),
});
