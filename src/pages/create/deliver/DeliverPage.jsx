import { Typography } from '@mui/material';
import GoBackButton from '../../../components/GoBackButton/GoBackButton.jsx';
import DeliveryForm from '../../../components/Form/DeliveryForm.jsx';

const DeliverPage = () => {
  return (
    <>
      <Typography sx={{ position: 'relative' }} align="center" variant="h2">
        <GoBackButton />
        Fill your delivery request form
      </Typography>

      <DeliveryForm />
    </>
  );
};

export default DeliverPage;
