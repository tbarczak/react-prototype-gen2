import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithNavigate } from './components/auth/Auth0ProviderWithNavigate';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

// Import styles
import '@mantine/core/styles.css';
import './styles/index.css';

// Initialize app
const root = document.getElementById('root');
if (root) {
  ReactDOM.createRoot(root).render(
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  );
}