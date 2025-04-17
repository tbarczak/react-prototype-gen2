// HTTPS configuration validator
export const validateHttpsConfig = (): void => {
  if (window.location.protocol !== 'https:' && process.env.NODE_ENV !== 'development') {
    console.error('Application must run over HTTPS');
    // Optional: redirect to HTTPS or show warning UI
  }
  
  // Validate Auth0 configuration
  if (!import.meta.env.VITE_AUTH0_DOMAIN || !import.meta.env.VITE_AUTH0_CLIENT_ID) {
    console.error('Missing Auth0 configuration');
  }
};