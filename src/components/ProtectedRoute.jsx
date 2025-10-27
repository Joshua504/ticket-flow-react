import { Navigate } from 'react-router';
import { isAuthenticated } from '../utils/auth';

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to auth/login if not authenticated
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
