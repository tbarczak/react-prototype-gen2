import { useAuth0 } from '@auth0/auth0-react';

export const useLogout = () => {
  const { logout } = useAuth0();
  
  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin + '/logged-out',
      }
    });
  };

  return { handleLogout };
};