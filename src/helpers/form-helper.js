export const formDataPrettier = (formData) => {
  const createdAt = new Date().toISOString();

  return {
    ...formData,
    dispatch_date: new Date(formData.dispatch_date).toISOString(),
    created_at: createdAt,
    id: createdAt,
  };
};

export const formDataUpdatePrettier = (formData) => {
  return {
    ...formData,
    dispatch_date: new Date(formData.dispatch_date).toISOString(),
  };
};

export const getFormikFieldError = (name, touched, errors) => {
  return touched[name] && errors[name];
};
