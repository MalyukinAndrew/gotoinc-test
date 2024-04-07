import PropTypes from 'prop-types';
import { Container } from '@mui/material';
import Navigation from './components/Navigation/Navigation.jsx';

function App({ children }) {
  return (
    <Container maxWidth="lg">
      <Navigation />
      {children}
    </Container>
  );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

export default App;
