import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// Pages
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { LoggedOut } from './pages/LoggedOut';
import { Reports } from './pages/Reports';
import { Account } from './pages/Account';

// Components
import { NavBar } from './components/layout/NavBar';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { ErrorProvider } from './context/ErrorContext';
import { ErrorBanner } from './components/common/ErrorBanner';

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <header style={{ height: '60px', backgroundColor: '#317039' }}>
          <NavBar />
        </header>
        
        <main style={{ flex: 1, padding: '1rem' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logged-out" element={<LoggedOut />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/account" element={<Account />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        
        <ErrorBanner />
      </div>
    </ErrorProvider>
  );
}

export default App;