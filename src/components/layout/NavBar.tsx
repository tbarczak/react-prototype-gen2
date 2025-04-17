import { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Group, Button, Menu, Text, Avatar } from '@mantine/core';
import { useTheme } from '../../context/ThemeContext';

export const NavBar = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const { themeMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [menuOpened, setMenuOpened] = useState(false);

  const handleLogout = () => {
    logout({
      logoutParams: {
        returnTo: window.location.origin + '/logged-out',
      }
    });
  };

  const navStyles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
      padding: '0 16px',
      backgroundColor: '#317039',
      color: 'white',
    },
    navItems: {
      display: 'flex',
      gap: '16px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      padding: '8px 12px',
      borderRadius: '4px',
      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },
    activeNavLink: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    userSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
  };

  return (
    <header style={navStyles.header}>
      <Group>
        <Text fw={700} size="lg">Reports Portal</Text>
        {isAuthenticated && (
          <Group ml="xl" style={navStyles.navItems}>
            <NavLink 
              to="/"
              style={({isActive}) => ({
                ...navStyles.navLink,
                ...(isActive ? navStyles.activeNavLink : {}),
              })}
            >
              Home
            </NavLink>
            <NavLink 
              to="/reports"
              style={({isActive}) => ({
                ...navStyles.navLink,
                ...(isActive ? navStyles.activeNavLink : {}),
              })}
            >
              Reports
            </NavLink>
            <NavLink 
              to="/account"
              style={({isActive}) => ({
                ...navStyles.navLink,
                ...(isActive ? navStyles.activeNavLink : {}),
              })}
            >
              Account
            </NavLink>
          </Group>
        )}
      </Group>

      <div style={navStyles.userSection}>
        {isAuthenticated ? (
          <Menu
            position="bottom-end"
            opened={menuOpened}
            onChange={setMenuOpened}
          >
            <Menu.Target>
              <Button variant="subtle" color="gray.1">
                <Group>
                  <Text>{user?.name}</Text>
                  <Avatar size="sm" src={user?.picture} alt={user?.name} />
                </Group>
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={toggleTheme}>
                Switch to {themeMode === 'light' ? 'Dark' : 'Light'} Mode
              </Menu.Item>
              <Menu.Item onClick={handleLogout} color="red">
                Logout
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        ) : (
          <Button variant="subtle" color="gray.1" onClick={() => navigate('/login')}>
            Login
          </Button>
        )}
      </div>
    </header>
  );
};