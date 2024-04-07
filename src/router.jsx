import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from 'react-router-dom';
import App from './App.jsx';
import MainPage from './pages/main/MainPage.jsx';
import CreatePage from './pages/create/CreatePage.jsx';
import RequestsPage from './pages/requests/RequestsPage.jsx';
import OrderPage from './pages/create/order/OrderPage.jsx';
import DeliverPage from './pages/create/deliver/DeliverPage.jsx';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <App>
          <Outlet />
        </App>
      }
    >
      <Route path="/" element={<MainPage />} />
      <Route path="/:id">
        <Route index element={<Navigate to="requests" />} />
        <Route path="requests" element={<RequestsPage />} />
        <Route path="create">
          <Route index element={<CreatePage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="deliver" element={<DeliverPage />} />
        </Route>
      </Route>
      <Route path="requests" element={<RequestsPage />} />
    </Route>,
  ),
);
