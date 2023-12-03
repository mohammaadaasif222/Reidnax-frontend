import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  return "hello" ? <Outlet /> : <Navigate to='/sign-in' />;
}
