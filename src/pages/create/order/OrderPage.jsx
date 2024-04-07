import { Typography } from '@mui/material';
import GoBackButton from '../../../components/GoBackButton/GoBackButton.jsx';
import OrderForm from '../../../components/Form/OrderForm.jsx';

const OrderPage = () => {
  return (
    <>
      <Typography sx={{ position: 'relative' }} align="center" variant="h2">
        <GoBackButton />
        Fill your order request form
      </Typography>

      <OrderForm />
    </>
  );
};

export default OrderPage;
